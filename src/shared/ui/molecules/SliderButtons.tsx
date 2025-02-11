import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '../atoms/Icon';
import { IconButton } from '../atoms/IconButton';

type SliderButtonsProps = {
  className?: string;
};

function SliderButtons({ className }: SliderButtonsProps): JSX.Element {
  return (
    <StyledSliderButtonsWrapper className={className}>
      <IconButton color="neutral" variant="filled" size="small">
        <Icon name="icon-chevron-left" />
      </IconButton>
      <IconButton color="neutral" variant="filled" size="small">
        <Icon name="icon-chevron-right" />
      </IconButton>
    </StyledSliderButtonsWrapper>
  );
}

export { SliderButtons };

const StyledSliderButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
