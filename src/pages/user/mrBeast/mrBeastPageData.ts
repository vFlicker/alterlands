import { avatarImage } from '~/shared/assets/images/avatars';
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
  },
  youtubeSection: {
    videos: {
      widgetTitle: 'Videos',
      mainVideo: {
        id: 1,
        avatar: avatarImage.mrBeastAvatar,
        date: '12h',
        viewCount: '81m',
        fullName: 'MrBeast',
        videoSrc: 'https://www.youtube.com/embed/zajUgQLviwk',
        title: 'Last to Leave Their Circle Wins $500,000',
        likesCount: '2m',
        messagesCount: '64k',
        reposts: '1.2k',
      },
      previewVideoImages: [
        {
          id: 1,
          videoImageUrl: mrBeastImage.preview.preview1,
          date: '5d',
          viewCount: '4m',
          fullName: 'MrBeast',
          title: 'Every Minute One Person Is Eliminated',
        },
        {
          id: 2,
          videoImageUrl: mrBeastImage.preview.preview2,
          date: '10d',
          viewCount: '2m',
          fullName: 'MrBeast',
          title: 'I Spent 100 Hours Inside the Pyramids!',
        },
        {
          id: 23,
          videoImageUrl: mrBeastImage.preview.preview3,
          date: '15d',
          viewCount: '6m',
          fullName: 'MrBeast',
          title: 'I Helped 2000 People Walk Again',
        },
      ],
    },
    posts: {
      widgetTitle: 'Posts',
      data: [
        {
          id: 1,
          date: '1d',
          viewCount: '2m',
          fullName: 'MrBeast',
          text: [
            'Whoops @kiroraceco sorry for messing up the car 😅 @fiaformulae',
          ],
          image: mrBeastImage.post.post1,
          avatar: avatarImage.mrBeastAvatar,
          likesCount: '1.4m',
          messagesCount: '120k',
          reposts: '24k',
        },
        {
          id: 3,
          date: '1d',
          viewCount: '2m',
          fullName: 'MrBeast',
          text: ['Find the human, win $10,000'],
          image: mrBeastImage.post.post2,
          avatar: avatarImage.mrBeastAvatar,
          likesCount: '1.4m',
          messagesCount: '120k',
          reposts: '24k',
        },
        {
          id: 3,
          date: '1d',
          viewCount: '2m',
          fullName: 'MrBeast',
          text: [
            'Just uploaded a video where we helped 2,000 amputees walk again. Many lived in America and it feels so disgusting that in a country with this much wealth, a fucken YouTuber is their only option to get a prosthetic leg. We need to fix this.',
          ],
          avatar: avatarImage.mrBeastAvatar,
          likesCount: '1.4m',
          messagesCount: '120k',
          reposts: '24k',
        },
        {
          id: 4,
          date: '2d',
          viewCount: '2m',
          fullName: 'MrBeast',
          text: [
            '100 Circles, 100 People, 1 Winner, $500,000!',
            'New video is out now!',
          ],
          image: mrBeastImage.post.post3,
          avatar: avatarImage.mrBeastAvatar,
          likesCount: '1.4m',
          messagesCount: '120k',
          reposts: '24k',
        },
        {
          id: 1,
          date: '1d',
          viewCount: '2m',
          fullName: 'MrBeast',
          text: [
            'Whoops @kiroraceco sorry for messing up the car 😅 @fiaformulae',
          ],
          image: mrBeastImage.post.post1,
          avatar: avatarImage.mrBeastAvatar,
          likesCount: '1.4m',
          messagesCount: '120k',
          reposts: '24k',
        },
      ],
    },
    backstagePhoto: {
      widgetTitle: 'Backstage photos',
      data: [
        {
          id: 1,
          imageUrl: mrBeastImage.backstagePhoto.photo1,
        },
        {
          id: 2,
          imageUrl: mrBeastImage.backstagePhoto.photo2,
        },
        {
          id: 3,
          imageUrl: mrBeastImage.backstagePhoto.photo3,
        },
      ],
    },
    privateBackstagePhoto: {
      widgetTitle: 'Private backstage photos',
      data: [
        {
          id: 1,
          imageUrl: mrBeastImage.privateBackstagePhoto.photo1,
        },
        {
          id: 2,
          imageUrl: mrBeastImage.privateBackstagePhoto.photo2,
        },
        {
          id: 3,
          imageUrl: mrBeastImage.privateBackstagePhoto.photo3,
        },
      ],
    },
  },
};

export { mrBeastPageData };
