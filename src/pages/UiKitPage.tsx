import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';
import { Buttons } from '~/widgets/Buttons';
import { Chips } from '~/widgets/Chips';
import { Icons } from '~/widgets/Icons';
import { Inputs } from '~/widgets/Inputs';
import { Reactions } from '~/widgets/Reactions';

function UiKitPage(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledTitle>UI Kit page</StyledTitle>
      <StyledParagraph>
        This is a description of the UI Kit page.
      </StyledParagraph>
      <Icons />
      <Inputs />
      <Reactions />
      <Buttons />
      <Chips />
    </StyledWrapper>
  );
}

export { UiKitPage };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 4px;
`;

const StyledTitle = withAttrs({ variant: 'heading-1' }, Typography);
const StyledParagraph = withAttrs({ variant: 'body-2' }, Typography);
