import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { Masonic } from '~/shared/ui/atoms/Masonic';
import { WidgetColumn } from '~/shared/ui/molecules/WidgetColumn';
import { Leaderboards } from '~/widgets/f1/Leaderboards';
import { TeamLeaderboards } from '~/widgets/f1/TeamLeaderboards';
import { UpcomingRaceWidget } from '~/widgets/f1/UpcomingRacesWidget';
import { MemeWidget } from '~/widgets/MemeWidget';
import { NewsWidget } from '~/widgets/NewsWidget';
import { PostWidget } from '~/widgets/PostWidget';
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

        <WidgetColumn
          title="PROs"
          actionButton={<LabelButton color="white">More</LabelButton>}
        >
          {f1PageData.posts.map((post) => (
            <PostWidget key={post.id} {...post} />
          ))}
        </WidgetColumn>

        <WidgetColumn title="Merch widget">TODO: add merch widget</WidgetColumn>

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

        <WidgetColumn title="Discussion widget">
          TODO: add discussion widget
        </WidgetColumn>

        <WidgetColumn title="Post widget">TODO: add post widget</WidgetColumn>
      </Masonic.Item>

      <Masonic.Item>
        <WidgetColumn title="Team leaderboards">
          <TeamLeaderboards teams={f1PageData.teamLeaderboards} />
        </WidgetColumn>

        <WidgetColumn title="Chat widget">TODO: add chat widget</WidgetColumn>

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
