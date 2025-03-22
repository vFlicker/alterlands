import { commonImage } from '~/shared/assets/images/common';
import { mrBeastImage } from '~/shared/assets/images/user/mrBeast';

const mrBeastPageData = {
  header: {
    name: 'MrBeast',
    avatarUrl: mrBeastImage.avatar,
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
  personalFiles: [],
};

export { mrBeastPageData };
