import styled from '@emotion/styled';
import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { Select } from '~/shared/ui/molecules/Select';
import { withAttrs } from '~/shared/ui/withAttrs';
import { CardsWidget } from '~/widgets/common/cards';
import { ChatWidget } from '~/widgets/common/chat';
import { DiscussionWidget } from '~/widgets/common/discussion';
import { MemesWidget } from '~/widgets/common/memes';
import { NewsWidget } from '~/widgets/common/news';
import { PostsWidget } from '~/widgets/common/posts';
import { VideosListWidget } from '~/widgets/common/videos';
import { ContentSection } from '~/widgets/ContentSection';
import { LeaderboardsWidget } from '~/widgets/f1/leaderboards';
import { TeamLeaderboardsWidget } from '~/widgets/f1/teamLeaderboards';
import { UpcomingRacesWidget } from '~/widgets/f1/upcomingRaces';
import { TopBar } from '~/widgets/TopBar';

import { f1PageData } from './f1PageData';

function F1Page(): JSX.Element {
  return (
    <>
      <StyledTopBar>
        <StyledSelect
          options={f1PageData.select.options}
          value={f1PageData.select.value}
        />
      </StyledTopBar>

      <StyledContentSection menu={f1PageData.menu} />

      <Masonic.List>
        <Masonic.Item>
          <UpcomingRacesWidget {...f1PageData.upcomingRaces} />
          <PostsWidget {...f1PageData.posts} />
          <CardsWidget {...f1PageData.merch} />
          <MemesWidget {...f1PageData.memes} />
        </Masonic.Item>

        <Masonic.Item>
          <LeaderboardsWidget {...f1PageData.leaderboards} />
          <DiscussionWidget {...f1PageData.discussion} />
          <PostsWidget {...f1PageData.posts} />
        </Masonic.Item>

        <Masonic.Item>
          <TeamLeaderboardsWidget {...f1PageData.teamLeaderboards} />
          <ChatWidget {...f1PageData.chat} />
          <NewsWidget {...f1PageData.news} />
          <VideosListWidget {...f1PageData.videos} />
        </Masonic.Item>
      </Masonic.List>
    </>
  );
}

export { F1Page };

const StyledTopBar = styled(TopBar)`
  margin-bottom: 16px;
`;

const StyledSelect = withAttrs(
  { variant: 'outlined', size: 'medium' },
  styled(Select)`
    @media screen and (max-width: 1280px) {
      width: 100%;
      max-width: 180px;
    }
  `,
);

const StyledContentSection = styled(ContentSection)`
  margin-bottom: 16px;
`;
