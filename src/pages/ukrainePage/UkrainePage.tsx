import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemeWidget } from '~/widgets/MemeWidget';
import { NewsWidget } from '~/widgets/NewsWidget';
import { PostWidget } from '~/widgets/PostWidget';
import { VideoWidget } from '~/widgets/VideoWidget';

import { ukrainePageData } from './ukrainePageData';

function UkrainePage(): JSX.Element {
  return (
    <Masonic>
      <WidgetColumn title="Cities">TODO: add cities widget</WidgetColumn>
      <WidgetColumn title="Top Charts">
        TODO: add top charts widget
      </WidgetColumn>
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

      <WidgetColumn title="Trend Topics widge">
        TODO: add trend topics widge
      </WidgetColumn>
      <WidgetColumn title="Voice">TODO: add voice widget</WidgetColumn>
      <WidgetColumn title="Officials">
        {ukrainePageData.posts.map((post) => (
          <PostWidget key={post.id} {...post} />
        ))}
      </WidgetColumn>
      <WidgetColumn title="Trend Topics widge">
        TODO: add trend topics widge
      </WidgetColumn>
      <WidgetColumn title="Top Charts">
        TODO: add top charts widget
      </WidgetColumn>

      <WidgetColumn title="Memes" columns={2}>
        {ukrainePageData.mems.map((meme) => (
          <MemeWidget key={meme.id} {...meme} />
        ))}
      </WidgetColumn>
      <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>
    </Masonic>
  );
}

export { UkrainePage };
