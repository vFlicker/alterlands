import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';
import { Buttons } from '~/widgets/Buttons';
import { Chips } from '~/widgets/Chips';
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
      <Chips />
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

const StyledTitle = withAttrs({ variant: 'heading-1' }, Typography);
const StyledParagraph = withAttrs({ variant: 'body-2' }, Typography);
