import styled from '@emotion/styled';
import { JSX } from 'react';

import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Video } from './Video';
import { VideoPreview } from './VideoPreview';
import { VideoData, VideoPreviewData } from './videosTypes';

type VideosGridWidgetProps = {
  widgetTitle: string;
  mainVideo: VideoData;
  previewVideoImages: VideoPreviewData[];
  className?: string;
};

function VideosGridWidget({
  className,
  mainVideo,
  previewVideoImages,
  widgetTitle,
}: VideosGridWidgetProps): JSX.Element {
  return (
    <StyledVideosGridWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />
      <StyledVideosWrapper>
        <StyledMainVideo {...mainVideo} />
        <StyledVideoPreviewList>
          {previewVideoImages.map((preview) => (
            <StyledVideoPreview key={preview.id} {...preview} />
          ))}
        </StyledVideoPreviewList>
      </StyledVideosWrapper>
    </StyledVideosGridWidgetWrapper>
  );
}

export { VideosGridWidget };

const StyledVideosGridWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledVideosWrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 536px 1fr;
`;

const StyledMainVideo = styled(Video)``;

const StyledVideoPreviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledVideoPreview = styled(VideoPreview)`
  padding-bottom: 16px;

  &:not(:last-child) {
    ${separatorLineCss(8)}
  }
`;
