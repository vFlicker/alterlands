import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemeWidget } from '~/widgets/common/meme';
import { NewsWidget } from '~/widgets/common/news';
import { PostWidget } from '~/widgets/common/post';
import { VideoWidget } from '~/widgets/common/video';
import { CityWidget } from '~/widgets/ukraine/city';
import { TopChartsWidget } from '~/widgets/ukraine/topCharts';
import { TrendsWidget } from '~/widgets/ukraine/trends';

import { ukrainePageData } from './ukrainePageData';

function UkrainePage(): JSX.Element {
  return (
    <Masonic.List>
      <Masonic.Item>
        <CityWidget {...ukrainePageData.cities} />
        <TopChartsWidget {...ukrainePageData.topCharts} />
        <VideoWidget {...ukrainePageData.videos} />
        <NewsWidget {...ukrainePageData.news} />
      </Masonic.Item>

      <Masonic.Item>
        <TrendsWidget {...ukrainePageData.trends} />
        <WidgetColumn title="Voice">TODO: add voice widget</WidgetColumn>
        <PostWidget {...ukrainePageData.posts} />
      </Masonic.Item>

      <Masonic.Item>
        <MemeWidget {...ukrainePageData.memes} />
        <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>
      </Masonic.Item>
    </Masonic.List>
  );
}

export { UkrainePage };
