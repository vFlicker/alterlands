import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { MessageItem } from '~/shared/ui/molecules/MessageItem';
import { Reactions } from '~/shared/ui/molecules/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

import { DiscussionData } from './discussionTypes';

type DiscussionProps = DiscussionData & {
  className?: string;
};

function Discussion({
  className,
  avatar,
  date,
  fullName,
  viewCount,
  verified,
  id,
  likesCount,
  reposts,
  title,
  answers,
}: DiscussionProps): JSX.Element {
  return (
    <StyledDiscussionWrapper className={className}>
      <StyledDiscussionBlock key={id}>
        <UserMeta
          avatar={avatar}
          date={date}
          fullName={fullName}
          verified={verified}
          viewCount={viewCount}
          orientation="horizontal"
        />
        <StyledTitle>{title}</StyledTitle>
        <Reactions likesCount={likesCount} sharesCount={reposts} filled />
      </StyledDiscussionBlock>

      <StyledAnswersWrapper>
        {answers.map((answer) => (
          <StyledMessageItem key={answer.id} {...answer} />
        ))}
      </StyledAnswersWrapper>
    </StyledDiscussionWrapper>
  );
}

export { Discussion };

const StyledTitle = withAttrs({ variant: 'heading-5' }, Typography);

const StyledDiscussionWrapper = styled.div`
  padding: 8px 0;
`;

const StyledDiscussionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const StyledAnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledMessageItem = styled(MessageItem)`
  margin-left: 24px;
`;
