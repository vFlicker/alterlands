import styled from '@emotion/styled';
import { JSX } from 'react';

import { IconName } from '~/shared/theme/icons';
import { Button, ButtonColor, ButtonVariant } from '~/shared/ui/Button';
import { Icon } from '~/shared/ui/Icon';

function Buttons(): JSX.Element {
  return (
    <StyledWrapper>
      <Button color={ButtonColor.ACCENT} variant={ButtonVariant.FILLED}>
        Click me
      </Button>
      <Button
        color={ButtonColor.SECONDARY}
        variant={ButtonVariant.OUTLINED}
        leftIcon={<Icon name={IconName.ICON_PLUS} />}
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
