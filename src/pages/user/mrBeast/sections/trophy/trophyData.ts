import { mrBeastImage } from '~/shared/assets/images/user/mrBeast';

export const trophyData = {
  title: 'Creator of the Year',
  achievementTitle: 'Streamy awards',
  achievementSubtitle: '12th Annual Winners',
  description:
    'Three times won the streamy rewards in 2024, 2020, 2018 years. ',
  smallImage: mrBeastImage.streamyAwards,
  bigImage: mrBeastImage.streamyAwardsBig,
  trophies: [
    { image: mrBeastImage.trophy.streamyAward, times: 3 },
    { image: mrBeastImage.trophy.guinness, times: 5 },
    { image: mrBeastImage.trophy.youtube1, times: 1 },
    { image: mrBeastImage.trophy.youtube2, times: 1 },
    { image: mrBeastImage.trophy.youtube3, times: 1 },
    { image: mrBeastImage.trophy.youtube4, times: 1 },
    { image: mrBeastImage.trophy.youtube5, times: 1 },
    { image: mrBeastImage.trophy.trophyOwned, times: 1 },
  ],
};
