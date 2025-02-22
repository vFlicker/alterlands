import styled from '@emotion/styled';
import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { MemesWidget } from '~/widgets/common/memes';
import { NewsWidget } from '~/widgets/common/news';
import { PostsWidget } from '~/widgets/common/posts';
import { VideosWidget } from '~/widgets/common/videos';
import { ContentSection } from '~/widgets/ContentSection';
import { CitiesWidget } from '~/widgets/ukraine/cities';
import { FeaturedProductsWidget } from '~/widgets/ukraine/featuredProducts';
import { TopChartsWidget } from '~/widgets/ukraine/topCharts';
import { TrendsWidget } from '~/widgets/ukraine/trends';
import { VoteWidget } from '~/widgets/ukraine/vote';

import { ukrainePageData } from './ukrainePageData';

function UkrainePage(): JSX.Element {
  return (
    <>
      <StyledTopBar>Top bar</StyledTopBar>

      <StyledContentSection menu={ukrainePageData.menu} />

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
          <FeaturedProductsWidget {...ukrainePageData.featuredProducts} />
          <PostsWidget {...ukrainePageData.posts} />
        </Masonic.Item>

        <Masonic.Item>
          <MemesWidget {...ukrainePageData.memes} />
        </Masonic.Item>
      </Masonic.List>
    </>
  );
}

export { UkrainePage };

const StyledTopBar = styled.div`
  margin-bottom: 24px;
`;

const StyledContentSection = styled(ContentSection)`
  margin-bottom: 16px;
`;
