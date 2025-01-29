import { JSX, useState } from 'react';

import { Typography } from '~/shared/ui/Typography';
import { VoteControl } from '~/shared/ui/VoteControl';

type VoteState = 'up' | 'down' | null;

function Reactions(): JSX.Element {
  const [vote, setVote] = useState<VoteState>(null);

  const votes = '12k';
  const isUpActive = vote === 'up';
  const isDownActive = vote === 'down';

  return (
    <div>
      <Typography variant="heading-3">Reactions</Typography>
      <VoteControl
        filled
        count={votes}
        isUpActive={isUpActive}
        isDownActive={isDownActive}
        onUp={() => setVote(isUpActive ? null : 'up')}
        onDown={() => setVote(isDownActive ? null : 'down')}
      />
    </div>
  );
}

export { Reactions };
