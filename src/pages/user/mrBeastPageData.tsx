import { commonImage } from '~/shared/assets/images/common';
import { currentUserImage } from '~/shared/assets/images/user/mrBeast';

const mrBeastPageData = {
  header: {
    name: 'MrBeast',
    avatarUrl: currentUserImage.avatar,
    email: '@mrbeast',
    birthday: '07.05.1998',
    description: 'My New Show Beast Games is out now on Prime Video!',
    additionalInfo: [
      {
        count: '652',
        label: 'Friends',
      },
      {
        count: '66,4M',
        label: 'Followers',
      },
      {
        count: '2',
        label: 'Feeds',
      },
    ],
    socialMedia: [
      {
        name: 'Youtube',
        url: 'https://www.youtube.com/@MrBeast',
        iconUrl: commonImage.youtube,
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/mrbeast/',
        iconUrl: commonImage.instagram,
      },
      {
        name: 'X',
        url: 'https://x.com/MrBeast',
        iconUrl: commonImage.x,
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/mrbeast6000',
        iconUrl: commonImage.facebook,
      },
    ],
  },
  menu: {
    first: [
      'General',
      'MrBeast YouTube',
      'MrBeast Store',
      'MrBeast Burger',
      'News',
      'Hiring',
    ],
  },
  personalFiles: [],
  trophy: {
    title: 'Creator of the Year',
    achievementTitle: 'Streamy awards',
    achievementSubtitle: '12th Annual Winners',
    description:
      'Three times won the streamy rewards in 2024, 2020, 2018 years. ',
    smallImage: currentUserImage.streamyAwards,
    bigImage: currentUserImage.streamyAwardsBig,
    trophies: [
      { image: currentUserImage.trophy.streamyAward, times: 3 },
      { image: currentUserImage.trophy.guinness, times: 5 },
      { image: currentUserImage.trophy.youtube1, times: 1 },
      { image: currentUserImage.trophy.youtube2, times: 1 },
      { image: currentUserImage.trophy.youtube3, times: 1 },
      { image: currentUserImage.trophy.youtube4, times: 1 },
      { image: currentUserImage.trophy.youtube5, times: 1 },
      { image: currentUserImage.trophy.trophyOwned, times: 1 },
    ],
  },
};

export { mrBeastPageData };
