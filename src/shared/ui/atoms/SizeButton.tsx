import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';

import { Icon } from './Icon';
import { IconButton } from './IconButton';

type SizeButtonProps = {
  className?: string;
  onClick?: () => void;
};

function SizeButton({ className, onClick }: SizeButtonProps): JSX.Element {
  return (
    <StyledSizeButton
      className={className}
      size="small"
      color="transparent"
      variant="filled"
      onClick={onClick}
    >
      <Icon name="icon-full-screen" />
    </StyledSizeButton>
  );
}

export { SizeButton };

const StyledSizeButton = styled(IconButton)`
  margin-top: -2px;

  svg {
    stroke: ${Color.WHITE_42};
  }

  &:hover {
    svg {
      stroke: ${Color.WHITE_98};
    }
  }
`;
