import styled from '@emotion/styled';
import { JSX } from 'react';

import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Video } from './Video';
import { VideoData } from './videosTypes';

type VideosListWidgetProps = {
  widgetTitle: string;
  data: VideoData[];
  className?: string;
};

function VideosListWidget({
  className,
  data,
  widgetTitle,
}: VideosListWidgetProps): JSX.Element {
  return (
    <StyledVideosListWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />
      <StyledVideoList>
        {data.map((video) => (
          <StyledVideo key={video.id} {...video} />
        ))}
      </StyledVideoList>
    </StyledVideosListWidgetWrapper>
  );
}

export { VideosListWidget };

const StyledVideosListWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledVideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledVideo = styled(Video)`
  padding-bottom: 16px;

  &:not(:last-child) {
    ${separatorLineCss(8)}
  }
`;
