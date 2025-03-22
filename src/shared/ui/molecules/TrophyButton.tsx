import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { withAttrs } from '~/shared/ui/withAttrs';

type TrophyButtonProps = {
  active: boolean;
  onClick: () => void;
  className?: string;
};

function TrophyButton({
  className,
  active,
  onClick,
}: TrophyButtonProps): JSX.Element {
  return (
    <StyledTrophyButton className={className} active={active} onClick={onClick}>
      <Icon name="icon-trophy" />
    </StyledTrophyButton>
  );
}

export { TrophyButton };

const additionalCss = `
  background-color: ${Color.ACCENT};

  &:hover {
    background-color: ${Color.ACCENT_1};
  }
`;

const StyledTrophyButton = withAttrs(
  { variant: 'filled', color: 'accent', size: 'medium' },
  styled(IconButton)`
    width: 38px;
    height: 38px;
    background-color: ${Color.WHITE_8};

    &:hover {
      background-color: ${Color.ACCENT_1};
    }

    ${({ active }) => active && additionalCss}
  `,
);
