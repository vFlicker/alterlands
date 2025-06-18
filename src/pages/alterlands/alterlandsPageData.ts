import { alterlandsImage } from '~/shared/assets/images/alterlands';
import { avatarImage } from '~/shared/assets/images/avatars';

const alterlandsPageData = {
  header: {
    title: 'Alterlands',
    avatarUrl: alterlandsImage.header.avatar,
    properties: [
      { name: 'Сapital', value: 'None' },
      { name: 'Language', value: 'multilingual' },
      { name: 'Area', value: '8,083B km2' },
      { name: 'Members', value: '100%' },
      { name: 'Consul', value: 'Maksym Rudenko', link: 'linkUrl' },
    ],
    amountCards: [
      {
        id: 1,
        title: 'Total assets',
        amount: '5,274.17',
      },
      {
        id: 2,
        title: 'Other Assets',
        amount: '1,173.67 ',
      },
      {
        id: 3,
        title: 'Liabilities',
        amount: '-780.00',
      },
      {
        id: 4,
        title: 'Net Assets',
        amount: '4,494.17',
      },
    ],
  },
  menu: {
    first: [
      { title: 'Feed', disabled: false },
      { title: 'Products', disabled: true },
      { title: 'Properties', disabled: true },
      { title: 'Fundings', disabled: true },
      { title: 'Consult', disabled: true },
      { title: 'Budget', disabled: false },
      { title: 'Stats', disabled: true },
      { title: 'Relations', disabled: true },
      { title: 'Dashboard', disabled: true },
      { title: 'Authors', disabled: true },
      { title: 'Locations', disabled: true },
      { title: 'Media', disabled: true },
    ],
  },
  posts: {
    widgetTitle: 'Posts',
    data: [
      {
        id: 1,
        date: 'Dec 28',
        viewCount: '420k',
        fullName: 'Maksym Rudenko',
        text: ['We are launching'],
        image: alterlandsImage.post.post1,
        avatar: avatarImage.alterlandAvatar,
        likesCount: '2k',
        messagesCount: '1k',
        reposts: '432',
      },
      {
        id: 2,
        date: 'Dec 29',
        viewCount: '22k',
        fullName: 'Olena Zelenska',
        text: ['We exist'],
        image: alterlandsImage.post.post2,
        avatar: avatarImage.olenaZelenskaAvatar,
        likesCount: '12k',
        messagesCount: '8k',
        reposts: '2.3k',
      },
    ],
  },
  books: {
    widgetTitle: 'Advanced Knowledge',
    data: [
      {
        id: 1,
        imageUrl: alterlandsImage.book.book1,
        title: 'The path to point B',
      },
      {
        id: 2,
        imageUrl: alterlandsImage.book.book2,
        title: 'White Paper',
      },
      {
        id: 3,
        imageUrl: alterlandsImage.book.book3,
        title: 'Yellow Paper',
      },
    ],
  },
  vacancies: {
    widgetTitle: 'Vacancy',
    data: [
      {
        id: 1,
        date: '12h',
        viewCount: '551',
        avatar: avatarImage.alterlandAvatar,
        fullName: 'Alterlands',
        title: 'UX/UI Designer',
        description:
          "We are excited to announce an opportunity to connect with talented and creative designers who may be a perfect fit for our team in the future. By expressing your interest, you'll be added to our pool of potential candidates, and we'll reach out when the...",
        jobAttributes: [
          'Full time',
          'Remote',
          '1 year of experience',
          'Countries of Europe or Ukraine',
        ],
      },
      {
        id: 2,
        date: '18h',
        viewCount: '6k',
        avatar: avatarImage.alterlandAvatar,
        fullName: 'Alterlands',
        title: 'UX/UI Designer',
        description:
          'UX/UI Designer at DreamX Join the team that creates the design of the future! DreamX is looking for a talented UX/UI designer who dreams of working on interesting international projects and creating products that will be used by thousands of people around the world',
        jobAttributes: [
          'Full time',
          'Remote',
          '1 year of experience',
          'Countries of Europe or Ukraine',
        ],
      },
      {
        id: 3,
        date: '20h',
        viewCount: '800',
        avatar: avatarImage.alterlandAvatar,
        fullName: 'Alterlands',
        title: 'Web - Template designer',
        description:
          'Duda is the leading SaaS B2B website-building platform designed primarily for web professionals, agencies, and SaaS companies. It offers a drag-and-drop editor, customizable templates, and responsive design capabilities to create modern, mobile-friendly',
        jobAttributes: [
          'Part time',
          'On site',
          '2 years of experience',
          'Countries of Europe or Ukraine',
        ],
      },
      {
        id: 4,
        date: '23h',
        viewCount: '920',
        avatar: avatarImage.alterlandAvatar,
        fullName: 'Alterlands',
        title: 'Experienced UX/UI Designer',
        description:
          'Hello there! We at Cre8 Team are looking for an experienced UX/UI designer, who will join our growing team, and you might be such a person! It will be a perfect match if you have At least 1 years of proven experience working in an IT company (design',
        jobAttributes: [
          'Part time',
          'On site',
          '2 years of experience',
          'Countries of Europe or Ukraine',
        ],
      },
    ],
  },
  patchNotes: {
    widgetTitle: 'Patch Notes',
    data: [
      {
        id: 1,
        avatar: avatarImage.alterlandAvatar,
        date: '5h',
        viewCount: '91k',
        fullName: 'Alterlands',
        title: 'New update | Version 1.2.0',
        verified: false,
        likesCount: '12k',
        messagesCount: '323',
        reposts: '700k',
      },
      {
        id: 2,
        avatar: avatarImage.alterlandAvatar,
        date: '7h',
        viewCount: '91k',
        fullName: 'Alterlands',
        title: 'We added something new and useful for your improvement ',
        verified: false,
        likesCount: '3k',
        messagesCount: '2k',
        reposts: '406',
      },
      {
        id: 3,
        avatar: avatarImage.alterlandAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'Alterlands',
        title: 'New tutorial for page promotion',
        verified: false,
        likesCount: '2k',
        messagesCount: '1k',
        reposts: '750',
      },
    ],
  },
  slider: {
    widgetTitle: 'About Our Work',
    data: [
      {
        id: 1,
        imageUrl: alterlandsImage.slider.slide,
        title: 'Introduction',
      },
    ],
  },
  socials: {
    widgetTitle: 'Socials',
    data: [
      {
        id: 1,
        imageUrl: alterlandsImage.social.tg,
        title: 'Telegram',
      },
      {
        id: 2,
        imageUrl: alterlandsImage.social.discord,
        title: 'Discord',
      },
      {
        id: 3,
        imageUrl: alterlandsImage.social.x,
        title: 'Twitter',
      },
      {
        id: 4,
        imageUrl: alterlandsImage.social.instagram,
        title: 'Instagram',
      },
      {
        id: 5,
        imageUrl: alterlandsImage.social.youtube,
        title: 'YouTube',
      },
      {
        id: 6,
        imageUrl: alterlandsImage.social.linkedin,
        title: 'Linkedin',
      },
    ],
  },
  transactions: {
    widgetTitle: 'Latest Transactions',
    data: [
      {
        id: 1,
        title: 'Design services',
        date: 'Mar 12, 2025',
        direction: 'increase' as const,
        value: '1 200 EUR',
      },
      {
        id: 2,
        title: 'IT Technologies and Services',
        date: 'Mar 12, 2025',
        direction: 'decrease' as const,
        value: '2 200 EUR',
      },
      {
        id: 3,
        title: 'Advertising agencies',
        date: 'Mar 12, 2025',
        direction: 'increase' as const,
        value: '1 720 EUR',
      },
      {
        id: 4,
        title: 'Design services',
        date: 'Mar 12, 2025',
        direction: 'decrease' as const,
        value: '1 400 EUR',
      },
    ],
  },
};

export { alterlandsPageData };
