import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Button } from '~/shared/ui/atoms/Button';
import { Typography } from '~/shared/ui/atoms/Typography';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

function RequestWidget(): JSX.Element {
  return (
    <RequestWidgetWrapper>
      <StyledWidgetHeader title="Alterlands Ukraine Request" />

      <StyledContent>
        <StyledTextWrapper>
          <StyledTitle>UI/UX design assessment</StyledTitle>
          <StyledSubtitle>PROs and Experts only</StyledSubtitle>
        </StyledTextWrapper>

        <StyledContributeButton>Contribute</StyledContributeButton>
      </StyledContent>
    </RequestWidgetWrapper>
  );
}

export { RequestWidget };

const RequestWidgetWrapper = styled.div`
  padding: 20px 16px;
  border-radius: ${Radius.RADIUS_16};
  background-color: ${Color.ACCENT};
`;

const StyledWidgetHeader = styled(WidgetHeader)`
  border-color: ${Color.ACCENT_1};
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StyledTitle = withAttrs({ variant: 'heading-5' }, Typography);

const StyledSubtitle = withAttrs(
  { variant: 'body-3', $color: Color.ACCENT_2 },
  Typography,
);

const StyledContributeButton = withAttrs(
  {
    size: 'medium',
    color: 'neutral',
    variant: 'filled',
  },
  Button,
);
