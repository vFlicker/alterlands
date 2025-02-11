import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';
import { Buttons } from '~/widgets/uiKit/Buttons';
import { Chips } from '~/widgets/uiKit/Chips';
import { Icons } from '~/widgets/uiKit/Icons';
import { Inputs } from '~/widgets/uiKit/Inputs';

function UiKitPage(): JSX.Element {
  return (
    <StyledUiKitPageWrapper>
      <StyledTitle>UI Kit page</StyledTitle>
      <StyledParagraph>
        This is a description of the UI Kit page.
      </StyledParagraph>
      <Icons />
      <Inputs />
      <Buttons />
      <Chips />
    </StyledUiKitPageWrapper>
  );
}

export { UiKitPage };

const StyledUiKitPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 4px;
`;

const StyledTitle = withAttrs({ variant: 'heading-1' }, Typography);
const StyledParagraph = withAttrs({ variant: 'body-2' }, Typography);
