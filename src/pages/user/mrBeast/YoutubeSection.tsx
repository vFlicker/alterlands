import styled from '@emotion/styled';
import { JSX } from 'react';

import { PostsWidget } from '~/widgets/common/posts';
import { VideosGridWidget } from '~/widgets/common/videos';

import { mrBeastPageData } from './mrBeastPageData';

function YoutubeSection(): JSX.Element {
  return (
    <StyledYoutubeSectionWrapper>
      <VideosGridWidget {...mrBeastPageData.youtubeSection.videos} />
      <StyledColWrapper>
        <PostsWidget {...mrBeastPageData.youtubeSection.posts} />
      </StyledColWrapper>
    </StyledYoutubeSectionWrapper>
  );
}

export { YoutubeSection };

const StyledYoutubeSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StyledColWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;
