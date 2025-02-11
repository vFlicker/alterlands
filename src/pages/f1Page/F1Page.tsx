import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { Card } from '~/widgets/Card';
import { ChatWidget } from '~/widgets/ChatWidget';
import { DiscussionWidget } from '~/widgets/DiscussionWidget';
import { Leaderboards } from '~/widgets/f1/Leaderboards';
import { TeamLeaderboards } from '~/widgets/f1/TeamLeaderboards';
import { UpcomingRaceWidget } from '~/widgets/f1/UpcomingRacesWidget';
import { MemeWidget } from '~/widgets/MemeWidget';
import { NewsWidget } from '~/widgets/NewsWidget';
import { PostWidget } from '~/widgets/post';
import { VideoWidget } from '~/widgets/VideoWidget';

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

        <WidgetColumn title="Merch" columns={3}>
          {f1PageData.merch.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </WidgetColumn>

        <WidgetColumn title="Memes" columns={2}>
          {f1PageData.mems.map((meme) => (
            <MemeWidget key={meme.id} {...meme} />
          ))}
        </WidgetColumn>
      </Masonic.Item>

      <Masonic.Item>
        <WidgetColumn title="Leaderboards">
          <Leaderboards drivers={f1PageData.leaderboards} />
        </WidgetColumn>

        <WidgetColumn title="Opinion post widge">
          TODO: add post widge
        </WidgetColumn>

        <WidgetColumn title="Discussion">
          {f1PageData.discussion.map((item) => (
            <DiscussionWidget {...item} />
          ))}
        </WidgetColumn>

        <PostWidget {...f1PageData.posts} />
      </Masonic.Item>

      <Masonic.Item>
        <WidgetColumn title="Team leaderboards">
          <TeamLeaderboards teams={f1PageData.teamLeaderboards} />
        </WidgetColumn>

        <WidgetColumn title="Chat">
          <ChatWidget data={f1PageData.chat} />
        </WidgetColumn>

        <WidgetColumn title="News">
          {f1PageData.news.map((news) => (
            <NewsWidget key={news.id} {...news} />
          ))}
        </WidgetColumn>

        <WidgetColumn title="Videos">
          {f1PageData.videos.map((video) => (
            <VideoWidget key={video.id} {...video} />
          ))}
        </WidgetColumn>
      </Masonic.Item>
    </Masonic.List>
  );
}

export { F1Page };
