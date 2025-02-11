import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemeWidget } from '~/widgets/meme';
import { NewsWidget } from '~/widgets/news';
import { VideoWidget } from '~/widgets/video';

import { usPoliticsPageData } from './usPoliticsPageData';

function UsPoliticsPage(): JSX.Element {
  return (
    <Masonic.List>
      <Masonic.Item>
        <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>
        <MemeWidget {...usPoliticsPageData.memes} />
      </Masonic.Item>

      <Masonic.Item>
        <WidgetColumn title="Opinion post widge">
          TODO: add post widge
        </WidgetColumn>

        <NewsWidget {...usPoliticsPageData.longreads} />

        <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>
      </Masonic.Item>

      <Masonic.Item>
        <VideoWidget {...usPoliticsPageData.videos} />
      </Masonic.Item>
    </Masonic.List>
  );
}

export { UsPoliticsPage };
