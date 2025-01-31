import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '../theme/colors';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { Typography } from './Typography';
import { withAttrs } from './withAttrs';

type ConfigurationHeaderProps = {
  title: string;
  className?: string;
  onButtonClick?: () => void;
};

function ConfigurationHeader({
  title,
  className,
  onButtonClick,
}: ConfigurationHeaderProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledTitle>{title}</StyledTitle>
      {onButtonClick && (
        <StyledButton onClick={onButtonClick}>
          <Icon name="icon-settings" />
        </StyledButton>
      )}
    </StyledWrapper>
  );
}

export { ConfigurationHeader };

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

const StyledTitle = withAttrs(
  {
    variant: 'body-2',
    $color: Color.WHITE_42,
  },
  Typography,
);

const StyledButton = withAttrs(
  {
    color: 'transparent',
    variant: 'filled',
    size: 'small',
  },
  styled(IconButton)`
    & svg {
      stroke: ${Color.WHITE_42};
    }

    &:hover svg {
      stroke: ${Color.WHITE_98};
    }
  `,
);
