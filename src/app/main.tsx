import { init } from '@plausible-analytics/tracker';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppWithProviders } from './App';

init({ domain: 'alterlands.com' });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithProviders />
  </StrictMode>,
);
