#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const CURRENT_DIR = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(CURRENT_DIR, '..', 'dist');
const GIT_BRANCH = 'main';
const DEPLOY_BRANCH = 'gh-pages';
const REPO_URL = 'git@github.com:vflicker/alterlands.git';
const COMMIT_MESSAGE = 'deploy: Update gh-pages';

const executeCommand = (command, errorMessage) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    throw new Error(`${errorMessage}: ${error.message}`);
  }
};

const buildProject = () => {
  console.log('🔨 Building the project...');
  executeCommand('rm -rf dist', 'Failed to clean dist directory');
  executeCommand('npm run build', 'Failed to build project');
};

const setupGitHubPages = () => {
  console.log('📄 Creating GitHub Pages files...');
  fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '');
};

const setupGitRepository = () => {
  console.log('🔧 Initializing Git repository...');
  executeCommand('git init', 'Failed to initialize Git repository');
  executeCommand(`git checkout -B ${GIT_BRANCH}`, 'Failed to create branch');
  executeCommand('git add -A', 'Failed to stage files');
  executeCommand(
    `git commit -m "${COMMIT_MESSAGE}"`,
    'Failed to commit changes',
  );
};

const deployToGitHub = () => {
  console.log('🚀 Deploying to GitHub Pages...');
  executeCommand(
    `git push -f ${REPO_URL} ${GIT_BRANCH}:${DEPLOY_BRANCH}`,
    'Failed to push to GitHub',
  );
};

const deploy = async () => {
  const originalDir = process.cwd();

  try {
    console.log('🎬 Starting deployment process...');

    buildProject();

    // Change to dist directory for deployment
    process.chdir(DIST_DIR);

    setupGitHubPages();
    setupGitRepository();
    deployToGitHub();

    console.log('✅ Deployment successful!');
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  } finally {
    // Always return to original directory
    process.chdir(originalDir);
  }
};

try {
  await deploy();
} catch (err) {
  console.error('❌ Unexpected error:', err);
  process.exit(1);
}
