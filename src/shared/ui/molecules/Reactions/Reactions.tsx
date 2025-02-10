import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { MessageButton } from './MessageButton';
import { RepostButton } from './RepostButton';
import { VoteControl } from './VoteControl';

type VoteState = 'up' | 'down' | null;

type ReactionProps = {
  likes: string;
  messages: string;
  reposts: string;
  commentCount?: string;
  className?: string;
};

function Reactions({
  className,
  likes,
  commentCount,
  reposts,
}: ReactionProps): JSX.Element {
  const [vote, setVote] = useState<VoteState>(null);

  const isUpActive = vote === 'up';
  const isDownActive = vote === 'down';

  return (
    <StyledWrapper className={className}>
      <VoteControl
        filled
        count={likes}
        isUpActive={isUpActive}
        isDownActive={isDownActive}
        onUp={() => setVote(isUpActive ? null : 'up')}
        onDown={() => setVote(isDownActive ? null : 'down')}
      />

          {commentCount}
    </StyledWrapper>
  );
}

export { Reactions };

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
