import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { MemesWidget } from '~/widgets/common/memes';
import { NewsWidget } from '~/widgets/common/news';
import { PostsWidget } from '~/widgets/common/posts';
import { VideosWidget } from '~/widgets/common/videos';
import { CitiesWidget } from '~/widgets/ukraine/cities';
import { FeaturedProductsWidget } from '~/widgets/ukraine/featuredProducts';
import { TopChartsWidget } from '~/widgets/ukraine/topCharts';
import { TrendsWidget } from '~/widgets/ukraine/trends';
import { VoteWidget } from '~/widgets/ukraine/vote';

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
        <VoteWidget />
        <FeaturedProductsWidget />
        <PostsWidget {...ukrainePageData.posts} />
      </Masonic.Item>

      <Masonic.Item>
        <MemesWidget {...ukrainePageData.memes} />
      </Masonic.Item>
    </Masonic.List>
  );
}

export { UkrainePage };
