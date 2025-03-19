import { currentUserImage } from '~/shared/assets/images/user/current';

const currentUserPageData = {
  header: {
    name: 'Anna Kushch',
    avatarUrl: currentUserImage.avatar,
    email: '@anna.kushch',
    birthday: '20.12.2002',
    description:
      'A dedicated professional with a strong focus on clarity, precision, and effective problem-solving. Known for a structured approach to projects, blending technical expertise with practical creativity.',
    additionalInfo: [
      {
        count: '1,325',
        label: 'Friends',
      },
      {
        count: '245',
        label: 'Followers',
      },
      {
        count: '2',
        label: 'Feeds',
      },
    ],
  },
  menu: {
    first: ['Trophy', 'Achievements', 'Marks', 'Feed & Widgets', 'Test'],
  },
  personalFiles: [
    {
      title: 'Log',
      items: [
        {
          date: '2025/04/12',
          text: 'Participation in the 56th Alterlands Consul Elections (Ukraine). Result: 11.4% (250,111 votes)',
          additional: 'Result: 11.4% (250,111 votes)',
        },
        {
          date: '2025/04/08',
          text: 'Trophy: WON the Oscar for Best Screenplay for the film "I Am a Loser"',
        },
        {
          date: '2025/04/15',
          text: 'Issue: Bribe Alert! (Confirmed). Attempted to receive a $50,000 reward for participating in a sham deal. Reported to law enforcement. Initiated by Alterlands Global moderator #ACD002',
          link: 'Casefile',
          secondaryLink: 'How to appeal?',
        },
        {
          date: '2025/04/21',
          text: 'Achievement Unlocked: My first expert product!',
        },
        {
          date: '2025/04/21',
          text: 'Expert participation. Participated as an expert in the "Diya" project (Alterlands Ukraine)',
        },
        {
          date: '2025/04/18',
          text: 'Achievement Unlocked: Global Expert!',
        },
        {
          date: '2025/02/09',
          text: 'Achievement Unlocked: Local Expert!',
        },
        {
          date: '2025/02/09',
          text: 'Received the title of "Expert" in the association "Web designers of Ukraine"',
        },
        {
          date: '2025/02/08',
          text: 'Received the title of "Senior" in the association "Web designers of Ukraine"',
        },
        {
          date: '2025/02/08',
          text: 'Received the title of "Middle" in the association "Web designers of Ukraine"',
        },
        {
          date: '2025/02/08',
          text: 'Received the title of "Junior" in the association "Web designers of Ukraine"',
        },
        {
          date: '2025/02/05 ',
          text: 'Mastered the skill of "Web page design"',
          link: 'Course',
          additional: 'Grade: A+',
        },
        {
          date: '2025/02/02',
          text: 'Registration date',
        },
      ],
    },
    {
      title: 'Certificates',
      items: [
        {
          date: '2025/02/09',
          text: 'Received the title of "Expert" in the association "Web designers of Ukraine"',
        },
        {
          date: '2025/02/08',
          text: 'Received the title of "Senior" in the association "Web designers of Ukraine"',
        },
        {
          date: '2025/02/08',
          text: 'Received the title of "Middle" in the association "Web designers of Ukraine"',
        },
        {
          date: '2025/02/08',
          text: 'Received the title of "Junior" in the association "Web designers of Ukraine"',
        },
        {
          date: '2025/02/05 ',
          text: 'Mastered the skill of "Web page design"',
          link: 'Course',
          additional: 'Grade: A+',
        },
      ],
    },
    {
      title: 'News',
      items: [
        {
          date: '2025/02/09',
          text: 'Designer was detained for a bribe on Alterlands',
          link: 'Read more',
        },
      ],
    },
    {
      title: 'Issues',
      items: [
        {
          date: '2025/04/15',
          text: 'Issue: Bribe Alert! (Confirmed).',
          importantText:
            'Attempted to receive a $50,000 reward for participating in a sham deal. Reported to law enforcement. Initiated by Alterlands Global moderator #ACD002',
          link: 'Casefile',
          secondaryLink: 'How to appeal?',
        },
      ],
    },
  ],
  trophy: {
    title: 'Drink',
    achievementTitle: 'Battle of clans',
    achievementSubtitle: 'Gold invanotry',
    description:
      'The Drink Trophy is a sleek, modern award designed to celebrate excellence in beverage crafting and innovation.',
    smallImage: currentUserImage.battleOfClans,
    bigImage: currentUserImage.trophy.champagne,
    trophies: [
      { image: currentUserImage.trophy.champagne, times: 1 },
      { image: currentUserImage.trophy.graduationCap, times: 1 },
      { image: currentUserImage.trophy.values, times: 1 },
      { image: currentUserImage.trophy.mission, times: 1 },
      { image: currentUserImage.trophy.accessCard, times: 1 },
      { image: currentUserImage.trophy.champagne, times: 1 },
      { image: currentUserImage.trophy.law, times: 1 },
      { image: currentUserImage.trophy.piggyBank, times: 1 },
      { image: currentUserImage.trophy.petCare, times: 1 },
    ],
  },
};

export { currentUserPageData };
