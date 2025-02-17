import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { MessageButton } from './MessageButton';
import { RepostButton } from './RepostButton';
import { VoteControl } from './VoteControl';

type VoteState = 'up' | 'down' | null;

type ReactionProps = {
  likesCount?: string;
  sharesCount?: string;
  commentCount?: string;
  filled: boolean;
  className?: string;
};

function Reactions({
  className,
  likesCount,
  commentCount,
  sharesCount,
  filled,
}: ReactionProps): JSX.Element {
  const [vote, setVote] = useState<VoteState>(null);

  const variant = filled ? 'filled' : 'not filled';
  const isUpActive = vote === 'up';
  const isDownActive = vote === 'down';

  return (
    <StyledReactionsWrapper className={className} filled={filled}>
      {likesCount && (
        <VoteControl
          variant={variant}
          count={likesCount}
          isUpActive={isUpActive}
          isDownActive={isDownActive}
          onUp={() => setVote(isUpActive ? null : 'up')}
          onDown={() => setVote(isDownActive ? null : 'down')}
        />
      )}

      {commentCount && (
        <MessageButton variant={variant} onClick={() => {}}>
          {commentCount}
        </MessageButton>
      )}

      {sharesCount && (
        <RepostButton variant={variant} onClick={() => {}}>
          {sharesCount}
        </RepostButton>
      )}
    </StyledReactionsWrapper>
  );
}

export { Reactions };

const StyledReactionsWrapper = styled.div<Pick<ReactionProps, 'filled'>>`
  display: flex;
  align-items: center;
  gap: ${({ filled }) => (filled ? '8px' : '4px')};
`;
