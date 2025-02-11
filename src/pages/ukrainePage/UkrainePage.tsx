import { JSX } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemeWidget } from '~/widgets/MemeWidget';
import { NewsWidget } from '~/widgets/NewsWidget';
import { PostWidget } from '~/widgets/post';
import { CitiesWidget } from '~/widgets/ukraine/CitiesWidget';
import { TopChartsWidget } from '~/widgets/ukraine/TopCharts';
import { TrendsWidget } from '~/widgets/ukraine/TrendsWidget';
import { VideoWidget } from '~/widgets/VideoWidget';

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

        <WidgetColumn title="Videos">
          {ukrainePageData.videos.map((video) => (
            <VideoWidget key={video.id} {...video} />
          ))}
        </WidgetColumn>

        <WidgetColumn title="News">
          {ukrainePageData.news.map((news) => (
            <NewsWidget key={news.id} {...news} />
          ))}
        </WidgetColumn>
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
        <WidgetColumn title="Memes" columns={2}>
          {ukrainePageData.mems.map((meme) => (
            <MemeWidget key={meme.id} {...meme} />
          ))}
        </WidgetColumn>

        <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>
      </Masonic.Item>
    </Masonic.List>
  );
}

export { UkrainePage };
