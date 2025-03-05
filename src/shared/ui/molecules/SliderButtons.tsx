import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '../atoms/Icon';
import { IconButton } from '../atoms/IconButton';
import { Typography } from '../atoms/Typography';
import { withAttrs } from '../withAttrs';

type SliderButtonsProps = {
  text?: string;
  className?: string;
};

function SliderButtons({ className, text }: SliderButtonsProps): JSX.Element {
  return (
    <StyledSliderButtonsWrapper className={className}>
      <IconButton color="neutral" variant="filled" size="small">
        <Icon name="icon-chevron-left" />
      </IconButton>
      {text && <StyledText>{text}</StyledText>}
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
  align-items: center;
`;

const StyledText = withAttrs({ variant: 'body-3' }, Typography);
