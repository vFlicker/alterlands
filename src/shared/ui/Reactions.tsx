import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { Color } from '~/shared/theme/colors';
import { Button } from '~/shared/ui/Button';
import { Icon } from '~/shared/ui/Icon';
import { VoteControl } from '~/shared/ui/VoteControl';
import { withAttrs } from '~/shared/ui/withAttrs';

type VoteState = 'up' | 'down' | null;

function Reactions(): JSX.Element {
  const [vote, setVote] = useState<VoteState>(null);

  const votes = '12k';
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

      <StyledButton
        leftIcon={<Icon name="icon-message-circle" />}
        onClick={() => {}}
      >
        526
      </StyledButton>

      <StyledButton leftIcon={<Icon name="icon-repost" />} onClick={() => {}}>
        18k
      </StyledButton>
    </StyledWrapper>
  );
}

export { Reactions };

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledButton = withAttrs(
  {
    color: 'neutral',
    variant: 'filled',
    size: 'small',
  },
  styled(Button)`
    &:active {
      svg {
        fill: ${Color.WHITE_98};
      }
    }
  `,
);
