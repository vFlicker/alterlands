import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

type VideoWidgetProps = {
  avatar: string;
  date: string;
  views: string;
  fullName: string;
  videoSrc: string;
  title: string;
  likes: string;
  messages: string;
  reposts: string;
};

function VideoWidget({
  avatar,
  date,
  fullName,
  likes,
  messages,
  reposts,
  title,
  videoSrc,
  views,
}: VideoWidgetProps): JSX.Element {
  return (
    <StyledWrapper>
      <StyledWidgetHeader
        avatar={avatar}
        date={date}
        fullName={fullName}
        views={views}
        orientation="horizontal"
      />
      <StyedVideo width="100%" height="244" src={videoSrc}></StyedVideo>
      <StyledText>{title}</StyledText>
      <Reactions likes={likes} messages={messages} reposts={reposts} />
    </StyledWrapper>
  );
}

export { VideoWidget };

const StyledWidgetHeader = styled(WidgetHeader)`
  margin-bottom: 8px;
`;

const StyedVideo = styled.iframe`
  display: block;
  margin-bottom: 8px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 488px;
  padding: 8px 0;
`;

const StyledText = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    margin-bottom: 10px;
  `,
);
