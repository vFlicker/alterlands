import styled from '@emotion/styled';
import { JSX } from 'react';

import { Radius } from '~/shared/theme/radiuses';
import { Typography } from '~/shared/ui/atoms/Typography';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

import { VideoPreviewData } from './videosTypes';

type VideoPreviewProps = VideoPreviewData & {
  className?: string;
};

function VideoPreview({
  className,
  date,
  fullName,
  videoImageUrl,
  title,
  viewCount,
}: VideoPreviewProps): JSX.Element {
  return (
    <StyledVideoPreviewWrapper className={className}>
      <StyedVideoImage
        width="160"
        height="80"
        src={videoImageUrl}
      ></StyedVideoImage>
      <StyledContentWrapper>
        <StyledTitle>{title}</StyledTitle>
        <UserMeta
          orientation="horizontal"
          variant="mini"
          date={date}
          fullName={fullName}
          viewCount={viewCount}
        />
      </StyledContentWrapper>
    </StyledVideoPreviewWrapper>
  );
}

export { VideoPreview };

const StyledVideoPreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledTitle = withAttrs({ variant: 'heading-5' }, Typography);

const StyedVideoImage = styled.img`
  display: block;
  border-radius: ${Radius.RADIUS_4};
`;
