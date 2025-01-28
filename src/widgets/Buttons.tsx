import styled from '@emotion/styled';
import { JSX } from 'react';

import { Button } from '~/shared/ui/Button';
import { Icon } from '~/shared/ui/Icon';
import { IconButton } from '~/shared/ui/IconButton';

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
    </StyledWrapper>
  );
}

export { Buttons };

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
