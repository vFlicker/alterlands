import styled from '@emotion/styled';
import { JSX } from 'react';

import { Button } from '~/shared/ui/Button';
import { Icon } from '~/shared/ui/Icon';

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
    </StyledWrapper>
  );
}

export { Buttons };

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
