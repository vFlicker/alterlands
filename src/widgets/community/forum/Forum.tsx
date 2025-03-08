import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

import { ForumData } from './forumTypes';

type ForumProps = ForumData & {
  className?: string;
};

function Forum({
  className,
  avatar,
  date,
  fullName,
  likesCount,
  messagesCount,
  reposts,
  verified,
  title,
  viewCount,
}: ForumProps): JSX.Element {
  return (
    <StyledForumWrapper className={className}>
      <StyledUserMeta
        avatar={avatar}
        date={date}
        fullName={fullName}
        viewCount={viewCount}
        verified={verified}
        orientation="horizontal"
      />
      <StyledTitle>{title}</StyledTitle>
      <Reactions
        likesCount={likesCount}
        commentCount={messagesCount}
        sharesCount={reposts}
        filled
      />
    </StyledForumWrapper>
  );
}

export { Forum };

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 10px;
`;

const StyledForumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 8px 0;
`;

const StyledTitle = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    margin-bottom: 6px;
  `,
);
