import { JSX } from 'react';

import { Button } from '~/shared/ui/Button';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

function CountryPage(): JSX.Element {
  return (
    <div>
      <StyledTitle>CountryPage</StyledTitle>
      <StyledParagraph>
        This is a description of the country page.
      </StyledParagraph>
      <Button>Click me</Button>
    </div>
  );
}

export { CountryPage };

const StyledTitle = withAttrs(
  { variant: TypographyVariant.HEADING_1 },
  Typography,
);

const StyledParagraph = withAttrs(
  { variant: TypographyVariant.BODY_2 },
  Typography,
);
