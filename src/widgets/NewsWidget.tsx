import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

function NewsWidget(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledWidgetHeader orientation="horizontal" />
      <StyledTitle>
        F1 news, rumours and gossip: Formula 1 latest updates on teams, driver
        transfer market and contracts
      </StyledTitle>
      <Reactions />
    </StyledWrapper>
  );
}

export { NewsWidget };

const StyledWidgetHeader = styled(WidgetHeader)`
  margin-bottom: 8px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 488px;
`;

const StyledTitle = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    margin-bottom: 10px;
  `,
);
