import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Masonic } from '~/shared/ui/atoms/Masonic';
import { BannerWidget } from '~/widgets/common/banner';
import { MemesWidget } from '~/widgets/common/memes';
import { News } from '~/widgets/common/news';
import { CoursesWidget } from '~/widgets/community/courses';
import { ForumWidget } from '~/widgets/community/forum';
import { RequestWidget } from '~/widgets/community/request';
import { SalaryBenchmarkWidget } from '~/widgets/community/salaryBenchmark';
import { TopBar } from '~/widgets/community/TopBar';
import { VacancyWidget } from '~/widgets/community/vacancy';

import { communityPageData } from './communityPageData';

function CommunityPage(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledTopBar
        breadcrumbs={communityPageData.breadcrumbs}
        menu={communityPageData.menu.first}
        pageTitle={communityPageData.pageTitle}
      />

      <Masonic.List>
        <Masonic.Item>
          <StyledNewsWrapper>
            {communityPageData.news.map((news) => (
              <StyledNews key={news.id} {...news} />
            ))}
          </StyledNewsWrapper>

          <BannerWidget {...communityPageData.banner} />
          <CoursesWidget {...communityPageData.courses} />
          <MemesWidget {...communityPageData.memes} />
        </Masonic.Item>

        <Masonic.Item>
          <ForumWidget {...communityPageData.forum} />
          <SalaryBenchmarkWidget {...communityPageData.salaryBenchmark} />
          <RequestWidget />
          <VacancyWidget {...communityPageData.vacancies} />
        </Masonic.Item>
      </Masonic.List>
    </StyledWrapper>
  );
}

export { CommunityPage };

const StyledWrapper = styled.div``;

const StyledTopBar = styled(TopBar)`
  margin-bottom: 24px;
`;

const StyledNewsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledNews = styled(News)`
  padding: 16px;
  border: 1px solid ${Color.WHITE_16};
  border-radius: ${Radius.RADIUS_16};
`;
