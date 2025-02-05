import styled from '@emotion/styled';
import { JSX } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemeWidget } from '~/widgets/MemeWidget';
import { NewsWidget } from '~/widgets/NewsWidget';
import { PostWidget } from '~/widgets/PostWidget';
import { VideoWidget } from '~/widgets/VideoWidget';

function Formula1Page(): JSX.Element {
  return (
    <StyledWrapper>
      <WidgetColumn
        title="PROs"
        actionButton={<LabelButton color="white">More</LabelButton>}
      >
        <PostWidget />
        <PostWidget />
        <PostWidget />
      </WidgetColumn>
      <WidgetColumn title="Merch widget">TODO: add merch widget</WidgetColumn>
      <WidgetColumn title="Memes" columns={2}>
        <MemeWidget size="large" />
        <MemeWidget size="medium" />
        <MemeWidget size="small" />
      </WidgetColumn>

      <WidgetColumn title="Opinion post widge">
        TODO: add post widge
      </WidgetColumn>
      <WidgetColumn title="Discussion widget">
        TODO: add discussion widget
      </WidgetColumn>
      <WidgetColumn title="Post widget">TODO: add post widget</WidgetColumn>

      <WidgetColumn title="Chat widget">TODO: add chat widget</WidgetColumn>
      <WidgetColumn title="News">
        <NewsWidget />
        <NewsWidget />
        <NewsWidget />
      </WidgetColumn>
      <WidgetColumn title="Videos">
        <VideoWidget />
        <VideoWidget />
        <VideoWidget />
      </WidgetColumn>
    </StyledWrapper>
  );
}

export { Formula1Page };

const StyledWrapper = styled.div`
  columns: 3;
  column-gap: 16px;

  & > * {
    break-inside: avoid;
    margin-bottom: 16px;
    width: 100%;
  }

  @media screen and (max-width: 1280px) {
    columns: 2;
  }
`;
