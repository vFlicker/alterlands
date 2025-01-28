import styled from '@emotion/styled';
import { JSX } from 'react';

import { Chip } from '~/shared/ui/Chip';

function Chips(): JSX.Element {
  const colors = ['orange', 'yellow', 'green', 'white', 'blue', 'red'] as const;

  return (
    <StyledWrapper>
      <StyledChipsWrapper>
        {colors.map((color) => (
          <Chip color={color} size="small">
            most likes
          </Chip>
        ))}
      </StyledChipsWrapper>

      <StyledChipsWrapper>
        {colors.map((color) => (
          <Chip color={color} size="small" intensive>
            most likes
          </Chip>
        ))}
      </StyledChipsWrapper>

      <StyledChipsWrapper>
        {colors.map((color) => (
          <Chip color={color} size="medium">
            most likes
          </Chip>
        ))}
      </StyledChipsWrapper>

      <StyledChipsWrapper>
        {colors.map((color) => (
          <Chip color={color} size="medium" intensive>
            most likes
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
`;
