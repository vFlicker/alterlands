import styled from '@emotion/styled';
import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { Select } from '~/shared/ui/molecules/Select';
import { CardsWidget } from '~/widgets/common/cards';
import { ChatWidget } from '~/widgets/common/chat';
import { DiscussionWidget } from '~/widgets/common/discussion';
import { MemesWidget } from '~/widgets/common/memes';
import { NewsWidget } from '~/widgets/common/news';
import { PostsWidget } from '~/widgets/common/posts';
import { VideosWidget } from '~/widgets/common/videos';
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
        <Select
          options={f1PageData.select.options}
          value={f1PageData.select.value}
          variant="outlined"
          size="medium"
        />
      </StyledTopBar>

      <StyledContentSection />

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
          <VideosWidget {...f1PageData.videos} />
        </Masonic.Item>
      </Masonic.List>
    </>
  );
}

export { F1Page };

const StyledTopBar = styled(TopBar)`
  margin-bottom: 16px;
`;

const StyledContentSection = styled(ContentSection)`
  margin-bottom: 16px;
`;
