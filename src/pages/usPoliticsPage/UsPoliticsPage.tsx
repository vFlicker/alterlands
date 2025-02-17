import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { MemesWidget } from '~/widgets/common/memes';
import { NewsWidget } from '~/widgets/common/news';
import { OpinionWidget } from '~/widgets/common/opinion';
import { PostsWidget } from '~/widgets/common/posts';
import { VideosWidget } from '~/widgets/common/videos';

import { usPoliticsPageData } from './usPoliticsPageData';

function UsPoliticsPage(): JSX.Element {
  return (
    <Masonic.List>
      <Masonic.Item>
        <PostsWidget {...usPoliticsPageData.posts} />
        <MemesWidget {...usPoliticsPageData.memes} />
      </Masonic.Item>

      <Masonic.Item>
        <OpinionWidget {...usPoliticsPageData.opinion} />
        <NewsWidget {...usPoliticsPageData.longreads} />
      </Masonic.Item>

      <Masonic.Item>
        <VideosWidget {...usPoliticsPageData.videos} />
      </Masonic.Item>
    </Masonic.List>
  );
}

export { UsPoliticsPage };
