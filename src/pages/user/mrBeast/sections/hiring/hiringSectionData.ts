import { avatarImage } from '~/shared/assets/images/avatars';
import { communityImage } from '~/shared/assets/images/community';

const hiringSectionData = {
  salaryBenchmark: {
    widgetTitle: 'Salary benchmark',
    data: {
      hasActions: false,
      hasOptions: false,
      description:
        'This employer is ranked 1245th in terms of salary in the world',
      items: [
        {
          id: 1,
          title: 'Average salary worldwide',
          rate: {
            direction: 'increase' as const,
            value: '2.84%',
            postfix: 'past year',
          },
          amount: '53,509',
          imageUrl: communityImage.salaryBenchmark.graph1,
        },
        {
          id: 2,
          title: 'Average salary in your country',
          rate: {
            direction: 'increase' as const,
            value: '0.12%',
            postfix: 'last month',
          },
          amount: '800',
          imageUrl: communityImage.salaryBenchmark.graph2,
        },
      ],
    },
  },
  vacancies: {
    widgetTitle: 'Vacancy',
    data: [
      {
        id: 1,
        date: '18h',
        viewCount: '8k',
        avatar: avatarImage.mrBeastAvatar,
        fullName: 'MrBeast',
        title: 'Content-maker',
        description:
          "We are excited to announce an opportunity to connect with talented and creative designers who may be a perfect fit for our team in the future. By expressing your interest, you'll be added to our pool of potential candidates, and we'll reach out when the... ",
        skills: [
          'Copywriting',
          'Content Ideation',
          'Marketing',
          'Branding',
          'Collaboration',
          'AI Tools',
          'Adaptability',
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
        avatar: avatarImage.mrBeastAvatar,
        fullName: 'MrBeast',
        title: 'Graphic Designer',
        description:
          'UX/UI Designer at DreamX Join the team that creates the design of the future! DreamX is looking for a talented UX/UI designer who dreams of working on interesting international projects and creating products that will be used by thousands of people around the world',
        skills: [
          'Typography',
          'Composition',
          'Design Tools',
          'Photo & Video Editing Tools',
          'Creativity',
          'Design Tools',
          'Composition',
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
        avatar: avatarImage.mrBeastAvatar,
        fullName: 'MrBeast',
        title: 'SMM manager',
        description:
          'Duda is the leading SaaS B2B website-building platform designed primarily for web professionals, agencies, and SaaS companies. It offers a drag-and-drop editor, customizable templates, and responsive design capabilities to create modern, mobile-friendly',
        skills: [
          'Ad Management',
          'Automation',
          'Design Tools',
          'Social Media Strategy Development',
          'Problem-Solving',
          'Copywriting',
          'Adaptability',
        ],
        jobAttributes: [
          'Part time',
          'On site',
          '2 years of experience',
          'Countries of Europe or Ukraine',
        ],
      },
    ],
  },
  request: {
    widgetTitle: 'Alterlands Reviews',
    data: {
      title: 'Review for MrBeast',
      description: 'Employees, former employees, desired',
    },
  },
};

export { hiringSectionData };
