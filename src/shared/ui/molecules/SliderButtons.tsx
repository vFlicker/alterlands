import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '../atoms/Icon';
import { IconButton } from '../atoms/IconButton';

function SliderButtons(): JSX.Element {
  return (
    <StyledSliderButtons>
      <IconButton color="neutral" variant="filled" size="small">
        <Icon name="icon-chevron-left" />
      </IconButton>
      <IconButton color="neutral" variant="filled" size="small">
        <Icon name="icon-chevron-right" />
      </IconButton>
    </StyledSliderButtons>
  );
}

export { SliderButtons };

const StyledSliderButtons = styled.div`
  display: flex;
  gap: 12px;
`;
