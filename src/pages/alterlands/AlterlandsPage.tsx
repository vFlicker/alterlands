import styled from '@emotion/styled';
import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { AlterlandsSliderWidget } from '~/widgets/alterlands/alterlandsSlider';
import { BooksWidget } from '~/widgets/alterlands/books';
import { SocialsWidget } from '~/widgets/alterlands/socials';
import { TransactionsWidget } from '~/widgets/alterlands/transactions';
import { NewsWidget } from '~/widgets/common/news';
import { PostsWidget } from '~/widgets/common/posts';
import { VacancyWidget } from '~/widgets/community/vacancy';
import { ContentSection } from '~/widgets/ContentSection';
import { TopBar } from '~/widgets/ukraine/topBar';

import { alterlandsPageData } from './alterlandsPageData';

function AlterlandPage(): JSX.Element {
  return (
    <>
      <StyledTopBar {...alterlandsPageData.header} />
      <StyledContentSection menu={alterlandsPageData.menu} />

      <Masonic.List>
        <Masonic.Item>
          <AlterlandsSliderWidget {...alterlandsPageData.slider} />
          <VacancyWidget theme="dark" {...alterlandsPageData.vacancies} />
        </Masonic.Item>

        <Masonic.Item>
          <BooksWidget {...alterlandsPageData.books} />
          <SocialsWidget {...alterlandsPageData.socials} />
          <PostsWidget {...alterlandsPageData.posts} />
        </Masonic.Item>

        <Masonic.Item>
          <TransactionsWidget {...alterlandsPageData.transactions} />
          <NewsWidget {...alterlandsPageData.patchNotes} />
        </Masonic.Item>
      </Masonic.List>
    </>
  );
}

export { AlterlandPage };

const StyledTopBar = styled(TopBar)`
  margin-bottom: 24px;
`;

const StyledContentSection = styled(ContentSection)`
  margin-bottom: 16px;
`;
