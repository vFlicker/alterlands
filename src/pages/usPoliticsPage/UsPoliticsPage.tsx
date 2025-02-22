import styled from '@emotion/styled';
import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { MemesWidget } from '~/widgets/common/memes';
import { NewsWidget } from '~/widgets/common/news';
import { OpinionWidget } from '~/widgets/common/opinion';
import { PostsWidget } from '~/widgets/common/posts';
import { VideosWidget } from '~/widgets/common/videos';
import { ContentSection } from '~/widgets/ContentSection';
import { TopBar } from '~/widgets/TopBar';

import { usPoliticsPageData } from './usPoliticsPageData';

function UsPoliticsPage(): JSX.Element {
  return (
    <>
      <StyledTopBar />

      <StyledContentSection />

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
    </>
  );
}

export { UsPoliticsPage };

const StyledTopBar = styled(TopBar)`
  margin-bottom: 16px;
`;

const StyledContentSection = styled(ContentSection)`
  margin-bottom: 16px;
`;
