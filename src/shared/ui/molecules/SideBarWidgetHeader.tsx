import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';

import { Icon } from '../atoms/Icon';
import { IconButton } from '../atoms/IconButton';
import { Typography } from '../atoms/Typography';
import { withAttrs } from '../withAttrs';

type SideBarWidgetHeaderProps = {
  title: string;
  className?: string;
  onButtonClick?: () => void;
};

function SideBarWidgetHeader({
  title,
  className,
  onButtonClick,
}: SideBarWidgetHeaderProps): JSX.Element {
  return (
    <StyledSideBarWidgetHeaderWrapper className={className}>
      <StyledTitle>{title}</StyledTitle>
      {onButtonClick && (
        <StyledButton onClick={onButtonClick}>
          <Icon name="icon-settings" />
        </StyledButton>
      )}
    </StyledSideBarWidgetHeaderWrapper>
  );
}

export { SideBarWidgetHeader };

const StyledSideBarWidgetHeaderWrapper = styled.div`
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
