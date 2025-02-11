import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Video } from './Video';
import { VideoData } from './videoType';

type VideoWidgetProps = {
  widgetTitle: string;
  data: VideoData[];
  className?: string;
};

function VideoWidget({
  widgetTitle,
  data,
  className,
}: VideoWidgetProps): JSX.Element {
  return (
    <StyledVideoWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={<LabelButton color="white">More</LabelButton>}
      />
      <StyledVideoList>
        {data.map((video) => (
          <StyledVideo key={video.id} {...video} />
        ))}
      </StyledVideoList>
    </StyledVideoWidgetWrapper>
  );
}

export { VideoWidget };

const StyledVideoWidgetWrapper = styled.div``;

const StyledVideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const StyledVideo = styled(Video)`
  &:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      width: 100%;
      height: 1px;
      background-color: ${Color.WHITE_16};
    }
  }
`;
