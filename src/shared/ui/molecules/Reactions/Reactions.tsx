import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { MessageButton } from './MessageButton';
import { RepostButton } from './RepostButton';
import { VoteControl } from './VoteControl';

type VoteState = 'up' | 'down' | null;

function Reactions(): JSX.Element {
  const [vote, setVote] = useState<VoteState>(null);

  const votes = '4k';
  const isUpActive = vote === 'up';
  const isDownActive = vote === 'down';

  return (
    <StyledWrapper>
      <VoteControl
        filled
        count={votes}
        isUpActive={isUpActive}
        isDownActive={isDownActive}
        onUp={() => setVote(isUpActive ? null : 'up')}
        onDown={() => setVote(isDownActive ? null : 'down')}
      />

      <MessageButton onClick={() => {}}>30</MessageButton>
      <RepostButton onClick={() => {}}>1k</RepostButton>
    </StyledWrapper>
  );
}

export { Reactions };

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
