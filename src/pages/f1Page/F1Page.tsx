import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { CardWidget } from '~/widgets/card';
import { ChatWidget } from '~/widgets/chat';
import { DiscussionWidget } from '~/widgets/discussion';
import { Leaderboards } from '~/widgets/f1/Leaderboards';
import { TeamLeaderboards } from '~/widgets/f1/TeamLeaderboards';
import { UpcomingRaceWidget } from '~/widgets/f1/UpcomingRacesWidget';
import { MemeWidget } from '~/widgets/meme';
import { NewsWidget } from '~/widgets/news';
import { PostWidget } from '~/widgets/post';
import { VideoWidget } from '~/widgets/video';

import { f1PageData } from './f1PageData';

function F1Page(): JSX.Element {
  return (
    <Masonic.List>
      <Masonic.Item>
        <WidgetColumn
          title="Upcoming races"
          actionButton={
            <IconButton size="small" variant="filled" color="transparent">
              <Icon name="icon-maximize" />
            </IconButton>
          }
        >
          {f1PageData.upcomingRaces.map((race) => (
            <UpcomingRaceWidget key={race.id} {...race} />
          ))}
        </WidgetColumn>

        <PostWidget {...f1PageData.posts} />
        <CardWidget {...f1PageData.merch} />
        <MemeWidget {...f1PageData.memes} />
      </Masonic.Item>

      <Masonic.Item>
        <WidgetColumn title="Leaderboards">
          <Leaderboards drivers={f1PageData.leaderboards} />
        </WidgetColumn>

        <WidgetColumn title="Opinion post widge">
          TODO: add post widge
        </WidgetColumn>

        <DiscussionWidget {...f1PageData.discussion} />

        <PostWidget {...f1PageData.posts} />
      </Masonic.Item>

      <Masonic.Item>
        <WidgetColumn title="Team leaderboards">
          <TeamLeaderboards teams={f1PageData.teamLeaderboards} />
        </WidgetColumn>

        <ChatWidget {...f1PageData.chat} />
        <NewsWidget {...f1PageData.news} />
        <VideoWidget {...f1PageData.videos} />
      </Masonic.Item>
    </Masonic.List>
  );
}

export { F1Page };
