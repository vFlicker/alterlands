import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';
import { Buttons } from '~/widgets/Buttons';
import { Icons } from '~/widgets/Icons';

function CountryPage(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledTitle>CountryPage</StyledTitle>
      <StyledParagraph>
        This is a description of the country page.
      </StyledParagraph>
      <Icons />
      <Buttons />
    </StyledWrapper>
  );
}

export { CountryPage };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 4px;
`;

const StyledTitle = withAttrs(
  { variant: TypographyVariant.HEADING_1 },
  Typography,
);

const StyledParagraph = withAttrs(
  { variant: TypographyVariant.BODY_2 },
  Typography,
);
