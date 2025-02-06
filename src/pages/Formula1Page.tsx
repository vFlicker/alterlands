import { JSX } from 'react';

import { formula1PageData } from '~/shared/data/formula1PageData';
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

function Formula1Page(): JSX.Element {
  return (
    <Masonic>
      <WidgetColumn
        title="Upcoming races"
        actionButton={
          <IconButton size="small" variant="filled" color="transparent">
            <Icon name="icon-maximize" />
          </IconButton>
        }
      >
        {formula1PageData.upcomingRaces.map((race) => (
          <UpcomingRaceWidget key={race.id} {...race} />
        ))}
      </WidgetColumn>

      <WidgetColumn title="Leaderboards">
        <Leaderboards drivers={formula1PageData.leaderboards} />
      </WidgetColumn>

      <WidgetColumn title="Team leaderboards">
        <TeamLeaderboards teams={formula1PageData.teamLeaderboards} />
      </WidgetColumn>

      <WidgetColumn
        title="PROs"
        actionButton={<LabelButton color="white">More</LabelButton>}
      >
        {formula1PageData.posts.map((post) => (
          <PostWidget key={post.id} {...post} />
        ))}
      </WidgetColumn>
      <WidgetColumn title="Merch widget">TODO: add merch widget</WidgetColumn>
      <WidgetColumn title="Memes" columns={2}>
        {formula1PageData.mems.map((meme) => (
          <MemeWidget key={meme.id} {...meme} />
        ))}
      </WidgetColumn>
      <WidgetColumn title="Opinion post widge">
        TODO: add post widge
      </WidgetColumn>
      <WidgetColumn title="Discussion widget">
        TODO: add discussion widget
      </WidgetColumn>
      <WidgetColumn title="Post widget">TODO: add post widget</WidgetColumn>
      <WidgetColumn title="Chat widget">TODO: add chat widget</WidgetColumn>
      <WidgetColumn title="News">
        {formula1PageData.news.map((news) => (
          <NewsWidget key={news.id} {...news} />
        ))}
      </WidgetColumn>
      <WidgetColumn title="Videos">
        {formula1PageData.videos.map((video) => (
          <VideoWidget key={video.id} {...video} />
        ))}
      </WidgetColumn>
    </Masonic>
  );
}

export { Formula1Page };
