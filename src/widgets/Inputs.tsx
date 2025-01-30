import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '~/shared/ui/Icon';
import { Input } from '~/shared/ui/Input';
import { Typography } from '~/shared/ui/Typography';

function Inputs(): JSX.Element {
  return (
    <StyledWrapper>
      <Typography variant="heading-3">Inputs</Typography>

      <Input placeholder="Your name" />

      <Input placeholder="Search" leftIcon={<Icon name="icon-search" />} />

      <Input
        placeholder="Write comment..."
        rightIcon={<Icon name="icon-send" />}
      />
    </StyledWrapper>
  );
}

export { Inputs };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
