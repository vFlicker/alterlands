import styled from '@emotion/styled';
import { JSX } from 'react';

import { Chip } from '~/shared/ui/Chip';
import { Typography } from '~/shared/ui/Typography';

function Chips(): JSX.Element {
  const colors = ['orange', 'yellow', 'green', 'white', 'blue', 'red'] as const;

  return (
    <StyledWrapper>
      <Typography variant="heading-3">Chips</Typography>

      <StyledChipsWrapper>
        {colors.map((color) => (
          <Chip key={color + 'small'} color={color} size="small">
            {color} small
          </Chip>
        ))}
      </StyledChipsWrapper>

      <StyledChipsWrapper>
        {colors.map((color) => (
          <Chip
            key={color + 'small intensive'}
            color={color}
            size="small"
            intensive
          >
            {color} small intensive
          </Chip>
        ))}
      </StyledChipsWrapper>

      <StyledChipsWrapper>
        {colors.map((color) => (
          <Chip key={color + 'medium'} color={color} size="medium">
            {color} medium
          </Chip>
        ))}
      </StyledChipsWrapper>

      <StyledChipsWrapper>
        {colors.map((color) => (
          <Chip
            key={color + 'medium intensive'}
            color={color}
            size="medium"
            intensive
          >
            {color} medium intensive
          </Chip>
        ))}
      </StyledChipsWrapper>
    </StyledWrapper>
  );
}

export { Chips };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledChipsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;
