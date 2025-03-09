import { avatarImage } from '~/shared/assets/images/avatars';
import { communityImage } from '~/shared/assets/images/community';

const communityPageData = {
  pageTitle: 'UI/UX Designers Ukraine',
  breadcrumbs: [
    'Designers Global',
    'UI/UX Designers Global',
    'UI/UX Designers Ukraine',
  ],
  menu: {
    first: [
      'General',
      'News',
      'Courses',
      'Skills',
      'Levels',
      'Jobs',
      'Forum',
      'Boards',
      'Cases',
      'Calendar',
      'Rules',
      'Alterlands',
      'Salary Info',
    ],
  },
  salaryBenchmark: {
    widgetTitle: 'Salary benchmark',
    data: [
      {
        id: '1',
        title: 'Average salary worldwide',
        rate: {
          direction: 'increase' as const,
          value: '12.85%',
          postfix: 'past year',
        },
        amount: '73,509',
        imageUrl: communityImage.salaryBenchmark.graph1,
      },
      {
        id: '2',
        title: 'Average salary in your country',
        rate: {
          direction: 'increase' as const,
          value: '6.12%',
          postfix: 'last month',
        },
        amount: '500',
        imageUrl: communityImage.salaryBenchmark.graph2,
      },
    ],
  },
  news: [
    {
      id: 2,
      avatar: avatarImage.mediumAvatar,
      fullName: 'Medium',
      verified: true,
      date: '18h',
      viewCount: '6k',
      title: 'UX & UI Design for Accessible Modern News App',
      likesCount: '3k',
      messagesCount: '248',
      reposts: '962',
    },
    {
      id: 3,
      avatar: avatarImage.wiredAvatar,
      fullName: 'Wired',
      verified: true,
      date: '18h',
      viewCount: '8k',
      title: 'Google Assistant Finally Gets a Generative AI Glow-Up',
      likesCount: '4k',
      messagesCount: '3k',
      reposts: '2k',
    },
    {
      id: 3,
      avatar: avatarImage.uxPubAvatar,
      fullName: 'UX Pub',
      verified: true,
      date: '18h',
      viewCount: '8k',
      title: 'Pantone has chosen the color of the year 2025',
      likesCount: '4k',
      messagesCount: '3k',
      reposts: '2k',
    },
  ],
  forum: {
    widgetTitle: 'Forum',
    data: [
      {
        id: 1,
        avatar: avatarImage.annaKushchAvatar,
        fullName: 'Anna Kushch',
        verified: true,
        date: '12h',
        viewCount: '20k',
        title: "Why designers don't think about good user experience",
        likesCount: '16k',
        messagesCount: '523',
        reposts: '2k',
      },
      {
        id: 2,
        avatar: avatarImage.alexaAvatar,
        fullName: 'Alexa Green',
        verified: true,
        date: '18h',
        viewCount: '6k',
        title: 'There are more designers than was 5 years before, why???',
        likesCount: '3k',
        messagesCount: '248',
        reposts: '962',
      },
      {
        id: 3,
        avatar: avatarImage.artemPivovarovAvatar,
        fullName: 'Artem Pivovarov',
        verified: true,
        date: '18h',
        viewCount: '8k',
        title: 'What is better good ux and bad ui or bad ui and good ux?',
        likesCount: '4k',
        messagesCount: '3k',
        reposts: '2k',
      },
    ],
  },
  banner: {
    widgetTitle: 'Google Internship Opportunity',
    data: {
      imageSrc: communityImage.banner,
    },
  },
};

export { communityPageData };
