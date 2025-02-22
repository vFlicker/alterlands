import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Select } from '~/shared/ui/molecules/Select';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

function Selects(): JSX.Element {
  return (
    <StyledWrapper>
      <Typography variant="heading-3">Selects</Typography>

      <Select options={options} variant="empty" size="medium" />
      <Select options={options} variant="filled" size="medium" />
      <Select options={options} variant="outlined" size="medium" />
    </StyledWrapper>
  );
}

export { Selects };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
