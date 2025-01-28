import styled from '@emotion/styled';
import { JSX } from 'react';

import { Button } from '~/shared/ui/Button';
import { Icon } from '~/shared/ui/Icon';
import { IconButton } from '~/shared/ui/IconButton';
import { LabelButton } from '~/shared/ui/LabelButton';

function Buttons(): JSX.Element {
  return (
    <StyledWrapper>
      <Button color="accent" variant="filled">
        Click me
      </Button>
      <Button
        variant="filled"
        color="accent"
        leftIcon={<Icon name="icon-plus" />}
      >
        Buy
      </Button>

      <IconButton size="medium" variant="outlined" color="accent">
        <Icon name="icon-chevron" />
      </IconButton>

      <IconButton size="small" variant="filled" color="transparent">
        <Icon name="icon-plus" />
      </IconButton>

      <LabelButton color="white">Neutral</LabelButton>
      <LabelButton color="white" disabled>
        Neutral
      </LabelButton>
      <LabelButton color="blue">Neutral</LabelButton>
      <LabelButton color="blue" disabled>
        Neutral
      </LabelButton>
      <LabelButton color="red">Neutral</LabelButton>
      <LabelButton color="red" disabled>
        Neutral
      </LabelButton>
      <LabelButton color="green">Neutral</LabelButton>
      <LabelButton color="green" disabled>
        Neutral
      </LabelButton>
    </StyledWrapper>
  );
}

export { Buttons };

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
