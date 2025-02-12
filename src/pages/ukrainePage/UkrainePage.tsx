import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemesWidget } from '~/widgets/common/memes';
import { NewsWidget } from '~/widgets/common/news';
import { PostsWidget } from '~/widgets/common/posts';
import { VideosWidget } from '~/widgets/common/videos';
import { CitiesWidget } from '~/widgets/ukraine/cities';
import { TopChartsWidget } from '~/widgets/ukraine/topCharts';
import { TrendsWidget } from '~/widgets/ukraine/trends';

import { ukrainePageData } from './ukrainePageData';

function UkrainePage(): JSX.Element {
  return (
    <Masonic.List>
      <Masonic.Item>
        <CitiesWidget {...ukrainePageData.cities} />
        <TopChartsWidget {...ukrainePageData.topCharts} />
        <VideosWidget {...ukrainePageData.videos} />
        <NewsWidget {...ukrainePageData.news} />
      </Masonic.Item>

      <Masonic.Item>
        <TrendsWidget {...ukrainePageData.trends} />
        <WidgetColumn title="Voice">TODO: add voice widget</WidgetColumn>
        <PostsWidget {...ukrainePageData.posts} />
      </Masonic.Item>

      <Masonic.Item>
        <MemesWidget {...ukrainePageData.memes} />
        <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>
      </Masonic.Item>
    </Masonic.List>
  );
}

export { UkrainePage };
