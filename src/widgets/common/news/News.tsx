import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

import { NewsData } from './newsTypes';

type NewsProps = NewsData & {
  className?: string;
};

function News({
  className,
  avatar,
  date,
  fullName,
  likesCount,
  messagesCount,
  reposts,
  title,
  viewCount,
}: NewsProps): JSX.Element {
  return (
    <StyledNewsWrapper className={className}>
      <StyledUserMeta
        avatar={avatar}
        date={date}
        fullName={fullName}
        viewCount={viewCount}
        orientation="horizontal"
      />
      <StyledTitle>{title}</StyledTitle>
      <Reactions
        likesCount={likesCount}
        commentCount={messagesCount}
        sharesCount={reposts}
        filled
      />
    </StyledNewsWrapper>
  );
}

export { News };

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 8px;
`;

const StyledNewsWrapper = styled.div`
  width: 100%;
  max-width: 488px;
  padding: 8px 0;
`;

const StyledTitle = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    margin-bottom: 10px;
  `,
);
