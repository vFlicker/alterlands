import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

type VideoWidgetProps = {
  avatar: string;
  date: string;
  viewCount: string;
  fullName: string;
  videoSrc: string;
  title: string;
  likesCount: string;
  messagesCount: string;
  reposts: string;
};

function VideoWidget({
  avatar,
  date,
  fullName,
  likesCount,
  messagesCount,
  reposts,
  title,
  videoSrc,
  viewCount,
}: VideoWidgetProps): JSX.Element {
  return (
    <StyledVideoWidgetWrapper>
      <StyledUserMeta
        avatar={avatar}
        date={date}
        fullName={fullName}
        viewCount={viewCount}
        orientation="horizontal"
      />
      <StyedVideo width="100%" height="244" src={videoSrc}></StyedVideo>
      <StyledText>{title}</StyledText>
      <Reactions
        likesCount={likesCount}
        commentCount={messagesCount}
        sharesCount={reposts}
        filled
      />
    </StyledVideoWidgetWrapper>
  );
}

export { VideoWidget };

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 8px;
`;

const StyedVideo = styled.iframe`
  display: block;
  margin-bottom: 8px;
`;

const StyledVideoWidgetWrapper = styled.div`
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
