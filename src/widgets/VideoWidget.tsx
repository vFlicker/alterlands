import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

function VideoWidget(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledWidgetHeader orientation="horizontal" />
      <StyedVideo
        width="100%"
        height="244"
        src="https://www.youtube.com/embed/6Ki834aGZk4"
      ></StyedVideo>
      <StyledText>
        F1 news, rumours and gossip: Formula 1 latest updates on teams, driver
        transfer market and contracts
      </StyledText>
      <Reactions />
    </StyledWrapper>
  );
}

export { VideoWidget };

const StyledWidgetHeader = styled(WidgetHeader)`
  margin-bottom: 8px;
`;

const StyedVideo = styled.iframe`
  display: block;
  margin-bottom: 8px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 488px;
`;

const StyledText = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    margin-bottom: 10px;
  `,
);
