import styled from '@emotion/styled';
import { JSX, PropsWithChildren, useState } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { Icon } from '../atoms/Icon';
import { IconButton } from '../atoms/IconButton';

type SpoilerProps = PropsWithChildren<{
  title: string;
  className?: string;
}>;

function Spoiler({ className, title, children }: SpoilerProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledSpoilerWrapper className={className}>
      <StyledSpoiler onClick={() => setIsOpen((prev) => !prev)}>
        <StyledText>{title}</StyledText>
        <StyledToggler>
          <Icon name={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'} />
        </StyledToggler>
      </StyledSpoiler>

      {isOpen && children}
    </StyledSpoilerWrapper>
  );
}

export { Spoiler };

const StyledSpoilerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSpoiler = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: ${Radius.RADIUS_4};

  background-color: ${Color.WHITE_8};
  cursor: pointer;

  & + * {
    margin-top: 12px;
  }
`;

const StyledText = withAttrs({ variant: 'heading-5' }, Typography);

const StyledToggler = withAttrs(
  {
    color: 'transparent',
    variant: 'filled',
    size: 'small',
  },
  IconButton,
);
