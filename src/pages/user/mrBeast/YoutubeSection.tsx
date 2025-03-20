import styled from '@emotion/styled';
import { JSX } from 'react';

import { VideosGridWidget } from '~/widgets/common/videos';

import { mrBeastPageData } from './mrBeastPageData';

function YoutubeSection(): JSX.Element {
  return (
    <StyledYoutubeSectionWrapper>
      <VideosGridWidget {...mrBeastPageData.youtubeSection.videos} />
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
