import styled from '@emotion/styled';
import { JSX } from 'react';

import { postImage } from '~/shared/assets/images';
import { Radius } from '~/shared/theme/radiuses';
import { Reactions } from '~/shared/ui/Reactions';
import { Typography } from '~/shared/ui/Typography';
import { WidgetHeaderInfo } from '~/shared/ui/WidgetHeaderInfo';
import { withAttrs } from '~/shared/ui/withAttrs';

function Post(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledWidgetHeaderInfo />
      <StyledText>
        Senna is a true legend of our sport and has inspired not only me but
        every driver who races today. He's the greatest to ever race around
        Monaco and I wanted to capture that in this helmet.{' '}
      </StyledText>
      <StyledImage src={postImage} alt="Image description" />
      <Reactions />
    </StyledWrapper>
  );
}

export { Post };

const StyledWidgetHeaderInfo = styled(WidgetHeaderInfo)`
  margin-bottom: 8px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 488px;
`;

const StyledText = withAttrs(
  { variant: 'body-3' },
  styled(Typography)`
    margin-bottom: 10px;
  `,
);

const StyledImage = styled.img`
  margin-bottom: 10px;
  border-radius: ${Radius.RADIUS_4};
`;
