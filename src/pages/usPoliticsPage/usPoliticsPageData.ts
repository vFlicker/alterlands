import { avatarImage } from '~/shared/assets/images/avatars';
import { usPoliticsImage } from '~/shared/assets/images/usPolitics';

const usPoliticsPageData = {
  mems: [
    {
      id: 1,
      avatar: avatarImage.jessicaDavisAvatar,
      fullName: 'Jessica Davis',
      date: 'Jul 7',
      views: '31k',
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
      views: '31k',
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
      views: '31k',
      image: usPoliticsImage.meme.meme3,
      size: 'large' as const,
      likesCount: '1.5k',
      messagesCount: '523',
      reposts: '199',
    },
  ],
  longreads: [
    {
      id: 1,
      avatar: avatarImage.indianaAvatar,
      date: '12h',
      views: '91k',
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
      views: '91k',
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
      views: '91k',
      fullName: 'CNN',
      title:
        'Trump names ambassador to Panama after suggesting US control of Panama Canal',
      likesCount: '2k',
      messagesCount: '1k',
      reposts: '750',
    },
  ],
  videos: [
    {
      id: 1,
      avatar: avatarImage.bbcAvatar,
      date: '12h',
      views: '91k',
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
      views: '91k',
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
      views: '91k',
      fullName: 'BBC',
      videoSrc: 'https://www.youtube.com/embed/ehL5uwNNHvM',
      title: 'Relive a wild month in US politics in about two minutes',
      likesCount: '32k',
      messagesCount: '523',
      reposts: '1.2k',
    },
  ],
};

export { usPoliticsPageData };
