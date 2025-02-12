import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

import { VideoData } from './videoType';

type VideoProps = VideoData & {
  className?: string;
};

function Video({
  className,
  avatar,
  date,
  fullName,
  likesCount,
  messagesCount,
  reposts,
  title,
  videoSrc,
  viewCount,
}: VideoProps): JSX.Element {
  return (
    <StyledVideoWrapper className={className}>
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
    </StyledVideoWrapper>
  );
}

export { Video };

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 8px;
`;

const StyedVideo = styled.iframe`
  display: block;
  margin-bottom: 8px;
`;

const StyledVideoWrapper = styled.div`
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
