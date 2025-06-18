import styled from '@emotion/styled';
import { JSX } from 'react';

import { avatarImage } from '~/shared/assets/images/avatars';
import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Typography } from '~/shared/ui/atoms/Typography';
import { SliderButtons } from '~/shared/ui/molecules/SliderButtons';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

import { SliderData } from './alterlandsSliderTypes';

type CityProps = SliderData & {
  className?: string;
};

function AlterlandsSlider({
  className,
  title,
  imageUrl,
}: CityProps): JSX.Element {
  return (
    <StyledCityWrapper className={className}>
      <UserMeta
        avatar={avatarImage.alterlandAvatar}
        fullName="Alterlands"
        date="1d"
        viewCount="246k"
        orientation="horizontal"
      />
      <StyledImageWrapper>
        <StyledImage src={imageUrl} alt="city" />
        <StyledSliderButtons />
      </StyledImageWrapper>
      <StyledFooter>
        <StyledTitle>{title}</StyledTitle>
        <StyledSliderText>1/7</StyledSliderText>
      </StyledFooter>
    </StyledCityWrapper>
  );
}

export { AlterlandsSlider };

const StyledCityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const StyledImageWrapper = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  border-radius: ${Radius.RADIUS_4};
`;

const StyledSliderButtons = styled(SliderButtons)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 8px;

  button {
    width: 36px;
    height: 36px;
  }
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = withAttrs({ variant: 'heading-5' }, Typography);

const StyledSliderText = withAttrs(
  { variant: 'body-2', $color: Color.WHITE_64 },
  Typography,
);
