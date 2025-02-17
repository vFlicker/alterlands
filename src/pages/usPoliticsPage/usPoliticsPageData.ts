import { avatarImage } from '~/shared/assets/images/avatars';
import { usPoliticsImage } from '~/shared/assets/images/usPolitics';

const usPoliticsPageData = {
  memes: {
    widgetTitle: 'Memes',
    data: [
      {
        id: 1,
        avatar: avatarImage.jessicaDavisAvatar,
        fullName: 'Jessica Davis',
        date: 'Jul 7',
        viewCount: '31k',
        image: usPoliticsImage.meme.meme1,
        size: 'large' as const,
        likesCount: '1.2k',
        messagesCount: '451',
        reposts: '104',
      },
      {
        id: 2,
        avatar: avatarImage.jamesMillerAvatar,
        fullName: 'James Miller',
        date: 'Jul 7',
        viewCount: '31k',
        image: usPoliticsImage.meme.meme2,
        size: 'large' as const,
        likesCount: '2k',
        messagesCount: '610',
        reposts: '165',
      },
      {
        id: 3,
        avatar: avatarImage.ethanAndersonAvatar,
        fullName: 'Ethan Anderson',
        date: 'Jul 7',
        viewCount: '31k',
        image: usPoliticsImage.meme.meme3,
        size: 'large' as const,
        likesCount: '1.5k',
        messagesCount: '523',
        reposts: '199',
      },
    ],
  },
  longreads: {
    widgetTitle: 'Longreads',
    data: [
      {
        id: 1,
        avatar: avatarImage.indianaAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'Indiana CAPITAL Chronicle',
        title:
          'A nation exhausted: The neuroscience of why Americans are tuning out political news',
        likesCount: '32k',
        messagesCount: '523',
        reposts: '1.2k',
      },
      {
        id: 2,
        avatar: avatarImage.theNewYorkTimesAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'The New York Times',
        title: 'Will the U.S. Ever Be Ready for a Female President?',
        likesCount: '3k',
        messagesCount: '2k',
        reposts: '406',
      },
      {
        id: 3,
        avatar: avatarImage.cnnAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'CNN',
        title:
          'Trump names ambassador to Panama after suggesting US control of Panama Canal',
        likesCount: '2k',
        messagesCount: '1k',
        reposts: '750',
      },
    ],
  },
  videos: {
    widgetTitle: 'Videos',
    data: [
      {
        id: 1,
        avatar: avatarImage.bbcAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'BBC',
        videoSrc: 'https://www.youtube.com/embed/QB-7p6zKIVU',
        title: 'Biden commutes nearly all federal death row sentences | BBC',
        likesCount: '32k',
        messagesCount: '523',
        reposts: '1.2k',
      },
      {
        id: 2,
        avatar: avatarImage.cnnAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'CNN',
        videoSrc: 'https://www.youtube.com/embed/Lmz6NjgJiUE',
        title:
          "Former prosecutor: January 6 investigation 'already having an impact' on U.S. politics",
        likesCount: '32k',
        messagesCount: '523',
        reposts: '1.2k',
      },
      {
        id: 3,
        avatar: avatarImage.bbcAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'BBC',
        videoSrc: 'https://www.youtube.com/embed/ehL5uwNNHvM',
        title: 'Relive a wild month in US politics in about two minutes',
        likesCount: '32k',
        messagesCount: '523',
        reposts: '1.2k',
      },
    ],
  },
  opinion: {
    widgetTitle: 'Opinion post',
    data: {
      candidates: [
        {
          id: 1,
          name: 'Kamala Harris',
          imageUrl: usPoliticsImage.opinion.opinion1,
          votes: 4,
          color: 'blue' as const,
        },
        {
          id: 2,
          name: 'Donald Trump',
          imageUrl: usPoliticsImage.opinion.opinion2,
          votes: 6,
          color: 'red' as const,
        },
      ],
      comments: [
        {
          id: 1,
          avatar: avatarImage.maksymLevchenkoAvatar,
          fullName: 'Maksym Levchenko',
          date: '5m',
          message: 'WHYYYYYYYYYY do you argue here???',
          label: {
            text: 'Neutral',
            color: 'white' as const,
          },
          viewCount: '345',
          likesCount: '24',
          reposts: '6',
        },
        {
          id: 2,
          avatar: avatarImage.annaKushchAvatar,
          fullName: 'Anna Kushch',
          date: '2h',
          viewCount: '246',
          message:
            'Tramp Tramp Tramp. You are stupid people. Tramp is the best. Love you/ He will save uuuuuuuussssss',
          label: {
            text: 'blue side',
            color: 'blue' as const,
          },
          likesCount: '30',
          reposts: '0',
        },
        {
          id: 3,
          avatar: avatarImage.danielMooreAvatar,
          fullName: 'Daniel Moore',
          date: '4h',
          viewCount: '12k',
          message:
            'Kamala Harris is an inspiring trailblazer, embodying strength, intelligence, and resilience as the first woman, first Black, and first South Asian Vice President of the United States. Her ability to break barriers and champion justice is truly uplifting, giving hope to future generations. She radiates determination and warmth, proving that bold leadership and compassion can coexist beautifully.',
          label: {
            text: 'red side',
            color: 'red' as const,
          },
          likesCount: '12k',
          reposts: '2k',
        },
      ],
    },
  },
};

export { usPoliticsPageData };
