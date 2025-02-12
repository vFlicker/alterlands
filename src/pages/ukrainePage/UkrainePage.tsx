import { JSX } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemeWidget } from '~/widgets/common/meme';
import { NewsWidget } from '~/widgets/common/news';
import { PostWidget } from '~/widgets/common/post';
import { VideoWidget } from '~/widgets/common/video';
import { CitiesWidget } from '~/widgets/ukraine/CitiesWidget';
import { TopChartsWidget } from '~/widgets/ukraine/TopCharts';
import { TrendsWidget } from '~/widgets/ukraine/TrendsWidget';

import { ukrainePageData } from './ukrainePageData';

function UkrainePage(): JSX.Element {
  return (
    <Masonic.List>
      <Masonic.Item>
        <WidgetColumn
          title="Cities"
          actionButton={<LabelButton color="white">More</LabelButton>}
        >
          <CitiesWidget cities={ukrainePageData.cities} />
        </WidgetColumn>

        <TopChartsWidget data={ukrainePageData.topCharts} />
        <VideoWidget {...ukrainePageData.videos} />

        <NewsWidget {...ukrainePageData.news} />
      </Masonic.Item>

      <Masonic.Item>
        <WidgetColumn title="Trend Topics" columns={1}>
          <TrendsWidget data={ukrainePageData.trends} />
        </WidgetColumn>

        <WidgetColumn title="Voice">TODO: add voice widget</WidgetColumn>

        <PostWidget {...ukrainePageData.posts} />

        <WidgetColumn title="Trend Topics widge">
          TODO: add trend topics widge
        </WidgetColumn>

        <WidgetColumn title="Top Charts">
          TODO: add top charts widget
        </WidgetColumn>
      </Masonic.Item>

      <Masonic.Item>
        <MemeWidget {...ukrainePageData.memes} />
        <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>
      </Masonic.Item>
    </Masonic.List>
  );
}

export { UkrainePage };
