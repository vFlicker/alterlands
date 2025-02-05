import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemeWidget } from '~/widgets/MemeWidget';
import { NewsWidget } from '~/widgets/NewsWidget';
import { VideoWidget } from '~/widgets/VideoWidget';

function UsPoliticsPage(): JSX.Element {
  return (
    <Masonic>
      <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>
      <WidgetColumn title="Memes" columns={2}>
        <MemeWidget size="large" />
        <MemeWidget size="medium" />
        <MemeWidget size="small" />
      </WidgetColumn>

      <WidgetColumn title="Opinion post widge">
        TODO: add post widge
      </WidgetColumn>
      <WidgetColumn title="Longreads">
        <NewsWidget />
        <NewsWidget />
        <NewsWidget />
      </WidgetColumn>
      <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>

      <WidgetColumn title="Longreads">
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

export { UsPoliticsPage };
