import styled from '@emotion/styled';
import { JSX } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { separatorLineCss } from '~/shared/ui/css/separatorCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Video } from './Video';
import { VideoData } from './videosTypes';

type VideosWidgetProps = {
  widgetTitle: string;
  data: VideoData[];
  className?: string;
};

function VideosWidget({
  className,
  data,
  widgetTitle,
}: VideosWidgetProps): JSX.Element {
  return (
    <StyledVideosWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={<LabelButton color="white">More</LabelButton>}
      />
      <StyledVideoList>
        {data.map((video) => (
          <StyledVideo key={video.id} {...video} />
        ))}
      </StyledVideoList>
    </StyledVideosWidgetWrapper>
  );
}

export { VideosWidget };

const StyledVideosWidgetWrapper = styled.div``;

const StyledVideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const StyledVideo = styled(Video)`
  ${separatorLineCss}
`;
