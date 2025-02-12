import { JSX } from 'react';

import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { CardWidget } from '~/widgets/card';
import { ChatWidget } from '~/widgets/chat';
import { DiscussionWidget } from '~/widgets/discussion';
import { LeaderboardsWidget } from '~/widgets/f1/leaderboards';
import { TeamLeaderboardsWidget } from '~/widgets/f1/teamLeaderboards';
import { UpcomingRacesWidget } from '~/widgets/f1/upcomingRaces';
import { MemeWidget } from '~/widgets/meme';
import { NewsWidget } from '~/widgets/news';
import { PostWidget } from '~/widgets/post';
import { VideoWidget } from '~/widgets/video';

import { f1PageData } from './f1PageData';

function F1Page(): JSX.Element {
  return (
    <Masonic.List>
      <Masonic.Item>
        <UpcomingRacesWidget {...f1PageData.upcomingRaces} />
        <PostWidget {...f1PageData.posts} />
        <CardWidget {...f1PageData.merch} />
        <MemeWidget {...f1PageData.memes} />
      </Masonic.Item>

      <Masonic.Item>
        <LeaderboardsWidget {...f1PageData.leaderboards} />

        <WidgetColumn title="Opinion post widge">
          TODO: add post widge
        </WidgetColumn>

        <DiscussionWidget {...f1PageData.discussion} />

        <PostWidget {...f1PageData.posts} />
      </Masonic.Item>

      <Masonic.Item>
        <TeamLeaderboardsWidget {...f1PageData.teamLeaderboards} />
        <ChatWidget {...f1PageData.chat} />
        <NewsWidget {...f1PageData.news} />
        <VideoWidget {...f1PageData.videos} />
      </Masonic.Item>
    </Masonic.List>
  );
}

export { F1Page };
