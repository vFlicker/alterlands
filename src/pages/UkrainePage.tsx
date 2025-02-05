import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemeWidget } from '~/widgets/MemeWidget';
import { NewsWidget } from '~/widgets/NewsWidget';
import { VideoWidget } from '~/widgets/VideoWidget';

function UkrainePage(): JSX.Element {
  return (
    <Masonic>
      <WidgetColumn title="Cities">TODO: add cities widget</WidgetColumn>
      <WidgetColumn title="Top Charts">
        TODO: add top charts widget
      </WidgetColumn>
      <WidgetColumn title="Videos">
        <VideoWidget />
        <VideoWidget />
        <VideoWidget />
      </WidgetColumn>
      <WidgetColumn title="News">
        <NewsWidget />
        <NewsWidget />
        <NewsWidget />
      </WidgetColumn>

      <WidgetColumn title="Trend Topics widge">
        TODO: add trend topics widge
      </WidgetColumn>
      <WidgetColumn title="Voice">TODO: add voice widget</WidgetColumn>
      <WidgetColumn title="Officials">TODO: add officials widget</WidgetColumn>
      <WidgetColumn title="Trend Topics widge">
        TODO: add trend topics widge
      </WidgetColumn>
      <WidgetColumn title="Top Charts">
        TODO: add top charts widget
      </WidgetColumn>

      <WidgetColumn title="News">
        <NewsWidget />
        <NewsWidget />
        <NewsWidget />
      </WidgetColumn>
      <WidgetColumn title="Memes" columns={2}>
        <MemeWidget size="large" />
        <MemeWidget size="medium" />
        <MemeWidget size="small" />
      </WidgetColumn>
      <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>
    </Masonic>
  );
}

export { UkrainePage };
