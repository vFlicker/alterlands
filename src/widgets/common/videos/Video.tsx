import styled from '@emotion/styled';
import { JSX } from 'react';

import { Radius } from '~/shared/theme/radiuses';
import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

import { VideoData } from './videosTypes';

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
      <StyledContentWrapper>
        <StyledText>{title}</StyledText>
        <Reactions
          likesCount={likesCount}
          commentCount={messagesCount}
          sharesCount={reposts}
          filled
        />
      </StyledContentWrapper>
    </StyledVideoWrapper>
  );
}

export { Video };

const StyledVideoWrapper = styled.div`
  width: 100%;
  padding: 8px 0;
`;

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 8px;
`;

const StyedVideo = styled.iframe`
  display: block;
  margin-bottom: 8px;
  border-radius: ${Radius.RADIUS_8};
`;

const StyledContentWrapper = styled.div`
  padding: 0 8px;
`;

const StyledText = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    margin-bottom: 8px;
  `,
);
