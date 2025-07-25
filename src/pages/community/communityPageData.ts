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
      { title: 'General', disabled: false },
      { title: 'News', disabled: false },
      { title: 'Courses', disabled: false },
      { title: 'Skills', disabled: false },
      { title: 'Levels', disabled: false },
      { title: 'Jobs', disabled: false },
      { title: 'Forum', disabled: false },
      { title: 'Boards', disabled: false },
      { title: 'Cases', disabled: false },
      { title: 'Calendar', disabled: false },
      { title: 'Rules', disabled: false },
      { title: 'Alterlands', disabled: false },
      { title: 'Salary Info', disabled: false },
    ],
  },
  salaryBenchmark: {
    widgetTitle: 'Salary benchmark',
    data: {
      hasOptions: true,
      hasActions: true,
      description: 'This job is ranked 15th in terms of income in Ukraine',
      items: [
        {
          id: 1,
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
          id: 2,
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
  memes: {
    widgetTitle: 'Memes',
    data: [
      {
        id: 1,
        avatar: avatarImage.oleksandrShevchenkoAvatar,
        fullName: 'Oleksandr Shevchenko',
        date: 'Jul 7',
        viewCount: '31k',
        image: communityImage.meme.meme1,
        size: 'large' as const,
        likesCount: '60',
        messagesCount: '15',
        reposts: '88',
      },
      {
        id: 2,
        avatar: avatarImage.dmytroBondarenkoAvatar,
        fullName: 'Dmytro Bondarenko',
        date: 'Jul 7',
        viewCount: '31k',
        image: communityImage.meme.meme2,
        size: 'large' as const,
        likesCount: '12',
        messagesCount: '99',
        reposts: '12',
      },
      {
        id: 3,
        avatar: avatarImage.ivanSydorenkoAvatar,
        fullName: 'Ivan Sydorenko',
        date: 'Jul 7',
        viewCount: '31k',
        image: communityImage.meme.meme3,
        size: 'large' as const,
        likesCount: '13',
        messagesCount: '99',
        reposts: '12',
      },
      {
        id: 4,
        avatar: avatarImage.maksymLevchenkoAvatar,
        fullName: 'Maksym Levchenko',
        date: 'Jul 5',
        viewCount: '31k',
        image: communityImage.meme.meme4,
        size: 'large' as const,
        likesCount: '10',
        messagesCount: '90',
        reposts: '10',
      },
      {
        id: 5,
        avatar: avatarImage.oleksandrShevchenkoAvatar,
        fullName: 'Oleksandr Shevchenko',
        date: 'Jul 7',
        viewCount: '31k',
        image: communityImage.meme.meme5,
        size: 'large' as const,
        likesCount: '60',
        messagesCount: '15',
        reposts: '88',
      },
      {
        id: 6,
        avatar: avatarImage.dmytroBondarenkoAvatar,
        fullName: 'Dmytro Bondarenko',
        date: 'Jul 7',
        viewCount: '31k',
        image: communityImage.meme.meme6,
        size: 'large' as const,
        likesCount: '12',
        messagesCount: '99',
        reposts: '12',
      },
    ],
  },
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
  courses: {
    widgetTitle: 'Courses',
    data: [
      {
        id: 1,
        creatorTier: 'Pro' as const,
        creatorName: 'Daniel Scott',
        imageSrc: communityImage.course.course1,
        title: 'Adobe Illustrator CC – Advanced Training Course',
        labels: [
          'Adobe Illustrator',
          'Design Tools',
          'Photo & Video Editing Tools',
          'Graphic Design',
        ],
        price: '0.00$',
        examPrice: '$100',
      },
      {
        id: 2,
        creatorTier: 'E' as const,
        creatorName: 'Alan Ayoubi',
        imageSrc: communityImage.course.course2,
        title: 'Adobe Illustrator Mega Course - From Beginner to Advanced',
        labels: [
          'Adobe Illustrator',
          'Graphic Design',
          'Photo & Video Editing Tools',
          'Graphic Design',
        ],
        price: '0.00$',
        examPrice: '$100',
      },
      {
        id: 3,
        creatorTier: 'Pro' as const,
        creatorName: 'Vako Shvili',
        imageSrc: communityImage.course.course3,
        title: 'Complete Web Design: from Figma to Webflow',
        labels: [
          'Web Design',
          'Web & Mobile Design',
          'UX & Web & Mobile Design',
        ],
        price: '0.00$',
        examPrice: '$100',
      },
      {
        id: 4,
        creatorTier: 'GE' as const,
        creatorName: 'Ray Dombroski',
        imageSrc: communityImage.course.course4,
        title: 'Typographic Logos: Typography and Lettering for Logo Design',
        labels: ['Logo Design', 'Design Tools', 'Photo & Video Editing Tools'],
        price: '0.00$',
        examPrice: '$80',
      },
    ],
  },
  vacancies: {
    widgetTitle: 'Vacancy',
    data: [
      {
        id: 1,
        date: '18h',
        viewCount: '8k',
        avatar: avatarImage.phenomenonStudioAvatar,
        fullName: 'Phenomenon Studio',
        title: 'UX/UI Designer',
        description:
          "We are excited to announce an opportunity to connect with talented and creative designers who may be a perfect fit for our team in the future. By expressing your interest, you'll be added to our pool of potential candidates, and we'll reach out when the...",
        skills: [
          'Logo Design',
          'Design Tools',
          'Design Tools',
          'Photo & Video Editing Tools',
          'Photo & Video Editing Tools',
          'Design Tools',
          'Photo & Video Editing Tools',
        ],
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
        avatar: avatarImage.dreamXAvatar,
        fullName: 'DreamX',
        title: 'UX/UI Designer',
        description:
          'UX/UI Designer at DreamX Join the team that creates the design of the future! DreamX is looking for a talented UX/UI designer who dreams of working on interesting international projects and creating products that will be used by thousands of people around the world',
        skills: [
          'Logo Design',
          'Design Tools',
          'Design Tools',
          'Photo & Video Editing Tools',
          'Photo & Video Editing Tools',
          'Design Tools',
          'Photo & Video Editing Tools',
        ],
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
        avatar: avatarImage.adaptiqAvatar,
        fullName: 'Adaptiq',
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
        date: '20h',
        viewCount: '920',
        avatar: avatarImage.stormotionAvatar,
        fullName: 'Stormotion',
        title: 'Product or UI/UX designer',
        description:
          "We're looking for an experienced, skilled UI/UX designer for several long-term projects. Must-have: - A high level of intelligence - Common sense - Self-starter Important: - Translate written requirements into user stories/wireframes - Speak and write",
        jobAttributes: [
          'Full time',
          'On site',
          '2 years of experience',
          'Ukraine',
        ],
      },
      {
        id: 5,
        date: '21h',
        viewCount: '1.2k',
        avatar: avatarImage.supremityAvatar,
        fullName: 'Supremity',
        title: 'Product or UI/UX designer',
        description:
          "We're looking for an experienced, skilled UI/UX designer for several long-term projects. Must-have: - A high level of intelligence - Common sense - Self-starter Important: - Translate written requirements into user stories/wireframes - Speak and write",
        skills: [
          'Logo Design',
          'Design Tools',
          'Design Tools',
          'Photo & Video Editing Tools',
          'Photo & Video Editing Tools',
          'Design Tools',
          'Photo & Video Editing Tools',
        ],
        jobAttributes: [
          'Full time',
          'On site',
          '2 years of experience',
          'Ukraine',
        ],
      },
      {
        id: 6,
        date: '23h',
        viewCount: '2.1k',
        avatar: avatarImage.cre8TeamAvatar,
        fullName: 'Cre8 Team',
        title: 'Experienced UX/UI Designer',
        description:
          'Hello there! We at Cre8 Team are looking for an experienced UX/UI designer, who will join our growing team, and you might be such a person! It will be a perfect match if you have At least 1 years of proven experience working in an IT company (design',
        jobAttributes: [
          'Full time',
          'Remote',
          '5 years of experience',
          'Countries of Europe or Ukraine',
        ],
      },
      {
        id: 7,
        date: '1d',
        viewCount: '2.1k',
        avatar: avatarImage.cre8TeamAvatar,
        fullName: 'Cre8 Team',
        title: 'UX/UI Designer',
        description:
          'About Us At MATOFFO, we believe in delivering exceptional user experiences that drive results. Our team thrives on creativity, collaboration, and innovation to build solutions that engage audiences and elevate brands. We are seeking a talented UX/UI',
        skills: [
          'Logo Design',
          'Design Tools',
          'Design Tools',
          'Photo & Video Editing Tools',
          'Photo & Video Editing Tools',
          'Design Tools',
          'Photo & Video Editing Tools',
        ],
        jobAttributes: [
          'Full/Part time',
          'Remote',
          '2 years of experience',
          'Countries of Europe or Ukraine',
        ],
      },
    ],
  },
  request: {
    widgetTitle: 'Alterlands Ukraine Request',
    data: {
      title: 'UI/UX design assessment',
      description: 'PROs and Experts only',
    },
  },
};

export { communityPageData };
