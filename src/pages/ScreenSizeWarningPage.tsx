import { JSX } from '@emotion/react/jsx-runtime';
import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

export function ScreenSizeWarningPage(): JSX.Element {
  return (
    <StyledScreenSizeWarningPageWrapper>
      <StyledHeading>
        Mobile view is not supported yet. Please use a larger screen.
      </StyledHeading>
      <StyledText>
        For the best experience, please use a screen width of 1280px or larger.
      </StyledText>
      <StyledText>Thank you for your understanding!</StyledText>
    </StyledScreenSizeWarningPageWrapper>
  );
}

const StyledScreenSizeWarningPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100vh;
  text-align: center;
  padding: 20px;
  background-color: ${Color.BACKGROUND};
`;

const StyledHeading = withAttrs(
  { variant: 'heading-4', as: 'h1' },
  styled(Typography)`
    color: ${Color.WHITE_98};
  `,
);

const StyledText = withAttrs(
  { variant: 'body-1', as: 'p' },
  styled(Typography)`
    color: ${Color.WHITE_70};
  `,
);
