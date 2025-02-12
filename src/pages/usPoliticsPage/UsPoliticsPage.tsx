import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemesWidget } from '~/widgets/common/memes';
import { NewsWidget } from '~/widgets/common/news';
import { VideosWidget } from '~/widgets/common/videos';

import { usPoliticsPageData } from './usPoliticsPageData';

function UsPoliticsPage(): JSX.Element {
  return (
    <Masonic.List>
      <Masonic.Item>
        <WidgetColumn title="Posts">TODO: add post widget</WidgetColumn>
        <MemesWidget {...usPoliticsPageData.memes} />
      </Masonic.Item>

      <Masonic.Item>
        <WidgetColumn title="Opinion">TODO: add opinion widget</WidgetColumn>
        <NewsWidget {...usPoliticsPageData.longreads} />
        <WidgetColumn title="Posts">TODO: add post widget</WidgetColumn>
      </Masonic.Item>

      <Masonic.Item>
        <VideosWidget {...usPoliticsPageData.videos} />
      </Masonic.Item>
    </Masonic.List>
  );
}

export { UsPoliticsPage };
