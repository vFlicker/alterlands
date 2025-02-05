import { JSX } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemeWidget } from '~/widgets/MemeWidget';
import { NewsWidget } from '~/widgets/NewsWidget';
import { PostWidget } from '~/widgets/PostWidget';
import { VideoWidget } from '~/widgets/VideoWidget';

function Formula1Page(): JSX.Element {
  return (
    <Masonic>
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
    </Masonic>
  );
}

export { Formula1Page };
