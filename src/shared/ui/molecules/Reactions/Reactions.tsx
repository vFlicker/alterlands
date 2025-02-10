import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { ButtonVariant } from '../../atoms/Button';
import { MessageButton } from './MessageButton';
import { RepostButton } from './RepostButton';
import { VoteControl } from './VoteControl';

type VoteState = 'up' | 'down' | null;

type ReactionProps = {
  likes: string;
  reposts: string;
  variant?: `${ButtonVariant}`;
  commentCount?: string;
  className?: string;
};

function Reactions({
  className,
  likes,
  commentCount,
  reposts,
  variant = ButtonVariant.FILLED,
}: ReactionProps): JSX.Element {
  const [vote, setVote] = useState<VoteState>(null);

  const isUpActive = vote === 'up';
  const isDownActive = vote === 'down';

  return (
    <StyledWrapper className={className}>
      <VoteControl
        filled={variant === ButtonVariant.FILLED}
        count={likes}
        isUpActive={isUpActive}
        isDownActive={isDownActive}
        onUp={() => setVote(isUpActive ? null : 'up')}
        onDown={() => setVote(isDownActive ? null : 'down')}
      />

      {commentCount && (
        <MessageButton variant={variant} onClick={() => {}}>
          {commentCount}
        </MessageButton>
      )}
      <RepostButton variant={variant} onClick={() => {}}>
        {reposts}
      </RepostButton>
    </StyledWrapper>
  );
}

export { Reactions };

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
