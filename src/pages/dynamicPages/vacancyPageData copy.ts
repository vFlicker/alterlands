import { alterlandsImage } from '~/shared/assets/images/alterlands';
import { Block } from '~/shared/ui/atoms/BlockElement';

export const vacancyPageData = {
  jobAttributes: [
    'Full time',
    'Remote',
    '1 year of experience',
    'Countries of Europe or Ukraine',
  ],
  blocks: [
    [
      { title: 'Company Overview' },
      {
        paragraph:
          "We are excited to announce an opportunity to connect with talented and creative designers who may be a perfect fit for our team in the future. By expressing your interest, you'll be added to our pool of potential candidates, and we'll reach out when the.",
      },
    ],
    [
      { title: 'Job Description' },
      {
        paragraph:
          "We are excited to announce an opportunity to connect with talented and creative designers who may be a perfect fit for our team in the future. By expressing your interest, you'll be added to our pool of potential candidates, and we'll reach out when the.",
      },
    ],
    [
      { title: 'Key Responsibilities' },
      {
        paragraph:
          "We are excited to announce an opportunity to connect with talented and creative designers who may be a perfect fit for our team in the future. By expressing your interest, you'll be added to our pool of potential candidates, and we'll reach out when",
      },
      {
        list: [
          'Collaborate with the design team to create innovative and visually appealing designs.',
          'Participate in brainstorming sessions and contribute creative ideas.',
          'Assist in the development of design concepts and prototypes.',
          'Stay updated with industry trends and best practices in design.',
        ],
      },
    ],
    [
      { title: 'Qualifications' },
      {
        list: [
          'Collaborate with the design team to create innovative and visually appealing designs.',
          'Participate in brainstorming sessions and contribute creative ideas.',
          'Assist in the development of design concepts and prototypes.',
          'Stay updated with industry trends and best practices in design.',
        ],
      },
    ],
    [
      { title: 'Requirements' },
      {
        paragraph:
          "We are excited to announce an opportunity to connect with talented and creative designers who may be a perfect fit for our team in the future. By expressing your interest, you'll be added to our pool of potential candidates, and we'll reach out when",
      },
      {
        list: [
          'Collaborate with the design team to create innovative and visually appealing designs.',
          'Participate in brainstorming sessions and contribute creative ideas.',
          'Assist in the development of design concepts and prototypes.',
          'Stay updated with industry trends and best practices in design.',
        ],
      },
    ],
    [
      { title: 'Benefits' },
      {
        paragraph:
          "We are excited to announce an opportunity to connect with talented and creative designers who may be a perfect fit for our team in the future. By expressing your interest, you'll be added to our pool of potential candidates, and we'll reach out when",
      },
      {
        list: [
          'Collaborate with the design team to create innovative and visually appealing designs.',
          'Participate in brainstorming sessions and contribute creative ideas.',
          'Assist in the development of design concepts and prototypes.',
          'Stay updated with industry trends and best practices in design.',
        ],
      },
    ],
    [
      { title: 'Working at Alterlands' },
      {
        paragraph:
          "We are excited to announce an opportunity to connect with talented and creative designers who may be a perfect fit for our team in the future. By expressing your interest, you'll be added to our pool of potential candidates, and we'll reach out when",
      },
    ],
  ] as Block[][],
  sidebar: [
    {
      title: 'Location',
      value: 'Countries of Europe or Ukraine',
      imageSrc: alterlandsImage.vacancy.list.location,
    },
    {
      title: 'Type',
      value: 'Remote',
      imageSrc: alterlandsImage.vacancy.list.pin,
    },
    {
      title: 'Employment Type',
      value: 'Full time',
      imageSrc: alterlandsImage.vacancy.list.clock,
    },
    {
      title: 'Experience',
      value: '1 year of experience',
      imageSrc: alterlandsImage.vacancy.list.job,
    },
    {
      title: 'Salary',
      value: '$80,000 - $130,000 Annually',
      imageSrc: alterlandsImage.vacancy.list.wallet,
    },
  ],
};
