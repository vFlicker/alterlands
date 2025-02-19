import { avatarImage } from '~/shared/assets/images/avatars';
import { ukraineImage } from '~/shared/assets/images/ukraine';

const ukrainePageData = {
  posts: {
    widgetTitle: 'Officials',
    data: [
      {
        id: 1,
        date: 'Jul 5',
        viewCount: '91k',
        fullName: 'Zelenskiy / Official',
        text: [
          'Today, I spoke with Prime Minister of Ukraine Denys Shmyhal and had a discussion with Minister of Energy German Galushchenko. I heard the details of electricity imports from the European Union to Ukraine via Slovakia – about 19 percent of the total volume. We are working with other neighbors in the EU.',
          'And I have instructed our Government officials to do everything possible, together with the European Commission, together with all our partners in Europe, everything possible to maintain the stability of the united European energy system and uphold European energy rules. Whatever Putin may have told Fico during his visit to the Kremlin, European rules must prevail over any individual’s ties with Moscow.',
          'And one more thing. We are preparing several important personnel decisions. The decrees will be announced soon. I want to thank everyone who helps!',
          'Glory to Ukraine!',
        ],
        image: ukraineImage.post.post1,
        avatar: avatarImage.zelenskiyAvatar,
        likesCount: '32k',
        messagesCount: '523',
        reposts: '1.2k',
      },
      {
        id: 2,
        date: 'Jul 7',
        viewCount: '84k',
        fullName: 'Olena Zelenska',
        text: [
          '🎄 During the Christmas holidays, together with the Foundation team, I held a warm meeting with the children of an orphanage from Chernivtsi region, for which the Foundation became a mentor.',

          'During the day, the children had many activities in Kyiv, and at the end - a tea party at Sofia Kyivska. Here, we discussed with them our impressions of the trip. It was very touching to see the emotions of the children, and to hear from someone about their dreams.',

          'I really want no child in Ukraine who does not have parental warmth to be lonely during these holidays, but instead to feel the support of adults.',
        ],
        image: ukraineImage.post.post2,
        avatar: avatarImage.olenaZelenskaAvatar,
        likesCount: '42k',
        messagesCount: '872',
        reposts: '2.1k',
      },
    ],
  },
  memes: {
    widgetTitle: 'Memes',
    data: [
      {
        id: 1,
        avatar: avatarImage.oleksandrShevchenkoAvatar,
        fullName: 'Oleksandr Shevchenko',
        date: 'Jul 7',
        viewCount: '31k',
        image: ukraineImage.meme.meme1,
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
        image: ukraineImage.meme.meme2,
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
        image: ukraineImage.meme.meme3,
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
        image: ukraineImage.meme.meme4,
        size: 'large' as const,
        likesCount: '10',
        messagesCount: '90',
        reposts: '10',
      },
    ],
  },
  news: {
    widgetTitle: 'News',
    data: [
      {
        id: 1,
        avatar: avatarImage.bbcAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'BBC News Ukraine',
        title:
          'Sociologist Oleksiy Antipovych: "Zaluzhny embodies the hopes and aspirations of Ukrainians"',
        likesCount: '32k',
        messagesCount: '523',
        reposts: '1.2k',
      },
      {
        id: 2,
        avatar: avatarImage.presidentAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'President of Ukraine - Volodymyr Zelensky',
        title:
          'President: National communities are very important for preserving internal peace in Ukraine and realizing its geopolitical choice',
        likesCount: '3k',
        messagesCount: '2k',
        reposts: '406',
      },
      {
        id: 3,
        avatar: avatarImage.rbkAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'RBK Ukraine',
        title:
          "Fico's statement on the termination of electricity supply will not affect Ukraine's energy supply",
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
        avatar: avatarImage.ukrainianPravdaAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'Ukrainian Pravda',
        videoSrc: 'https://www.youtube.com/embed/mm7wvbhBTNw',
        title:
          'Chaos in Pokrovsk / Yermak vs. Fedorov and Kubrakov / Pressure on the Deep State – Butusov | UP. Interview',
        likesCount: '32k',
        messagesCount: '523',
        reposts: '1.2k',
      },
      {
        id: 2,
        avatar: avatarImage.officePresidentUkraine,
        date: '12h',
        viewCount: '91k',
        fullName: 'Office of the President of Ukraine',
        videoSrc: 'https://www.youtube.com/embed/uULRo4e9RE4',
        title: 'Merry Christmas greetings from Volodymyr Zelensky',
        likesCount: '32k',
        messagesCount: '523',
        reposts: '1.2k',
      },
      {
        id: 3,
        avatar: avatarImage.landoAvatar,
        date: '12h',
        viewCount: '91k',
        fullName: 'Zagin Kinomaniv',
        videoSrc: 'https://www.youtube.com/embed/uaYJ4pxMl0o',
        title:
          'GALUBOI AGANIOK, MUSICALS, BIG DIFFERENCE: What did TV feed us before the New Year?',
        likesCount: '32k',
        messagesCount: '523',
        reposts: '1.2k',
      },
    ],
  },
  trends: {
    widgetTitle: 'Trend topics',
    data: [
      {
        id: 1,
        title: 'Russian-Ukrainian War',
        postsCount: '36k',
        votesCount: '2.1m',
      },
      {
        id: 2,
        title: 'Alterlands Startups',
        postsCount: '12k',
        votesCount: '24k',
      },
      {
        id: 3,
        title: 'Trump',
        postsCount: '46k',
        votesCount: '21k',
      },
    ],
  },
  cities: {
    widgetTitle: 'Cities',
    data: [
      {
        id: 1,
        imageUrl: ukraineImage.city.city1,
        cityName: 'Kyiv',
        population: '2 952 145',
      },
    ],
  },
  topCharts: {
    widgetTitle: 'Top Charts',
    data: [
      {
        id: 1,
        imageUrl: avatarImage.artemPivovarovAvatar,
        fullName: 'Artem Pivovarov',
        songsCount: 45,
        albumsCount: 4,
      },
      {
        id: 2,
        imageUrl: avatarImage.tinaKarolAvatar,
        fullName: 'Tina Karol',
        songsCount: 85,
        albumsCount: 7,
      },
      {
        id: 3,
        imageUrl: avatarImage.nadiaDorofeevaAvatar,
        fullName: 'Naaia Dorofeeva',
        songsCount: 99,
        albumsCount: 8,
      },
    ],
  },
  featuredProducts: {
    widgetTitle: 'Featured products',
    data: [
      {
        id: 1,
        title: 'Monobank',
        description:
          'Перший український необанк у співпраці з Universal Bank, у ТОР 10 найбільших необанків світу, 8 млн клієнтів, TOP 1 на App Store та Google Play.',
        imageUrl: ukraineImage.product.product1,
      },
    ],
  },
};

export { ukrainePageData };
