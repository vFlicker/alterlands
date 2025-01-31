import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { ConfigurationHeader } from '~/shared/ui/ConfigurationHeader';
import { Icon } from '~/shared/ui/Icon';
import { IconButton } from '~/shared/ui/IconButton';
import { withAttrs } from '~/shared/ui/withAttrs';

const navItems = [
  { icon: 'icon-education', title: 'Education' },
  { icon: 'icon-job', title: 'Job' },
  { icon: 'icon-plane', title: 'Travel' },
  { icon: 'icon-plus', title: 'Add mode' },
] as const;

function ModeList(): JSX.Element {
  return (
    <StyledWrapper>
      <ConfigurationHeader title="Mode" onButtonClick={() => {}} />

      <StyledList>
        {navItems.map(({ icon, title }) => (
          <StyledButton key={title}>
            <Icon name={icon} />
          </StyledButton>
        ))}
      </StyledList>
    </StyledWrapper>
  );
}

export { ModeList };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2px;
`;

const StyledButton = withAttrs(
  {
    color: 'transparent',
    variant: 'filled',
    size: 'medium',
  },
  styled(IconButton)`
    svg {
      stroke: ${Color.WHITE_87};
    }

    &:hover,
    &:focus {
      svg {
        stroke: ${Color.WHITE_98};
      }
    }
  `,
);
