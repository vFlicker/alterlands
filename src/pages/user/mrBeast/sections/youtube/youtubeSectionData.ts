import { avatarImage } from '~/shared/assets/images/avatars';
import { mrBeastImage } from '~/shared/assets/images/user/mrBeast';

export const youtubeSectionData = {
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
  products: {
    widgetTitle: 'Products',
    data: [
      {
        id: 1,
        imageUrl: mrBeastImage.product.product1,
        name: 'Feastables',
        price: '102 грн',
      },
    ],
  },
};
