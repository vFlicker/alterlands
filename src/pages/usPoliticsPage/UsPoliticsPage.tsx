import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { MemeWidget } from '~/widgets/MemeWidget';
import { NewsWidget } from '~/widgets/NewsWidget';
import { VideoWidget } from '~/widgets/VideoWidget';

import { usPoliticsPageData } from './usPoliticsPageData';

function UsPoliticsPage(): JSX.Element {
  return (
    <Masonic.List>
      <Masonic.Item>
        <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>

        <WidgetColumn title="Memes" columns={2}>
          {usPoliticsPageData.mems.map((meme) => (
            <MemeWidget key={meme.id} {...meme} />
          ))}
        </WidgetColumn>
      </Masonic.Item>

      <Masonic.Item>
        <WidgetColumn title="Opinion post widge">
          TODO: add post widge
        </WidgetColumn>

        <WidgetColumn title="Longreads">
          {usPoliticsPageData.longreads.map((news) => (
            <NewsWidget key={news.id} {...news} />
          ))}
        </WidgetColumn>

        <WidgetColumn title="Posts">TODO: add post posts</WidgetColumn>
      </Masonic.Item>

      <Masonic.Item>
        <WidgetColumn title="Videos">
          {usPoliticsPageData.videos.map((video) => (
            <VideoWidget key={video.id} {...video} />
          ))}
        </WidgetColumn>
      </Masonic.Item>
    </Masonic.List>
  );
}

export { UsPoliticsPage };
