import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemeWidget } from '~/widgets/common/meme';
import { NewsWidget } from '~/widgets/common/news';
import { VideoWidget } from '~/widgets/common/video';

import { usPoliticsPageData } from './usPoliticsPageData';

function UsPoliticsPage(): JSX.Element {
  return (
    <Masonic.List>
      <Masonic.Item>
        <WidgetColumn title="Posts">TODO: add post widget</WidgetColumn>
        <MemeWidget {...usPoliticsPageData.memes} />
      </Masonic.Item>

      <Masonic.Item>
        <WidgetColumn title="Opinion">TODO: add opinion widget</WidgetColumn>
        <NewsWidget {...usPoliticsPageData.longreads} />
        <WidgetColumn title="Posts">TODO: add post widget</WidgetColumn>
      </Masonic.Item>

      <Masonic.Item>
        <VideoWidget {...usPoliticsPageData.videos} />
      </Masonic.Item>
    </Masonic.List>
  );
}

export { UsPoliticsPage };
