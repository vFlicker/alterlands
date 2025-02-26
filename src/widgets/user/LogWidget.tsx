import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { SizeButton } from '~/shared/ui/atoms/SizeButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

function LogWidget(): JSX.Element {
  return (
    <StyledLogWidgetWrapper>
      <StyledTextWrapper>
        <StyledTitle>Personal file:</StyledTitle>
        <StyledNotes>42 notes,</StyledNotes>
        <StyledIssues>2 issues</StyledIssues>
      </StyledTextWrapper>
      <SizeButton />
    </StyledLogWidgetWrapper>
  );
}

export { LogWidget };

const StyledLogWidgetWrapper = styled.div`
  display: inline-flex;
  gap: 24px;
  padding: 8px 16px;
  border-radius: ${Radius.RADIUS_100};
  background-color: ${Color.WHITE_8};
`;

const StyledTextWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const StyledTitle = withAttrs({ variant: 'heading-5' }, Typography);

const StyledNotes = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_87 },
  Typography,
);

const StyledIssues = withAttrs(
  { variant: 'body-3', $color: Color.RED_7 },
  styled(Typography)`
    text-decoration: underline;
  `,
);
