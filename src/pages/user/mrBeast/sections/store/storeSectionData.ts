import { avatarImage } from '~/shared/assets/images/avatars';
import { mrBeastImage } from '~/shared/assets/images/user/mrBeast';

export const storeSectionData = {
  newCollection: {
    widgetTitle: 'New collection',
    data: [
      {
        id: 1,
        imageUrl: mrBeastImage.store.newCollection.item1,
        title: 'KIDS BASICS - PANTHER TEE - BLUE',
        price: '45.00$',
      },
      {
        id: 2,
        imageUrl: mrBeastImage.store.newCollection.item2,
        title: 'KIDS GLOW IN THE DARK PANTHER HOODIE - BLACK',
        price: '55.00$',
      },
      {
        id: 3,
        imageUrl: mrBeastImage.store.newCollection.item3,
        title: 'KIDS BEAST GAMES HOODIE - BLACK',
        price: '55.00$',
      },
      {
        id: 4,
        imageUrl: mrBeastImage.store.newCollection.item4,
        title: 'BEAST ORIGINAL',
        price: '55.00$',
      },
      {
        id: 5,
        imageUrl: mrBeastImage.store.newCollection.item5,
        title: 'BEAST ACTIVE',
        price: '55.00$',
      },
    ],
  },
  gallery: {
    widgetTitle: 'Gallery',
    data: [
      mrBeastImage.store.gallery.item1,
      mrBeastImage.store.gallery.item2,
      mrBeastImage.store.gallery.item3,
      mrBeastImage.store.gallery.item4,
      mrBeastImage.store.gallery.item5,
      mrBeastImage.store.gallery.item6,
      mrBeastImage.store.gallery.item7,
      mrBeastImage.store.gallery.item8,
      mrBeastImage.store.gallery.item9,
    ],
  },
  happyClients: {
    widgetTitle: 'Happy Clients',
    data: [
      {
        id: 1,
        date: '15d',
        viewCount: '26k',
        fullName: 'Anna Kushch',
        image: mrBeastImage.store.happyClient.item1,
        avatar: avatarImage.annaKushchAvatar,
        likesCount: '12k',
        messagesCount: '54',
        verified: true,
        reposts: '12',
        comment:
          "Senna is a true legend of our sport and has inspired not only me but every driver who races today. He's the greatest to ever race around Monaco and I wanted to capture that in this helmet.",
      },
      {
        id: 2,
        date: 'Feb 12',
        viewCount: '32k',
        fullName: 'Alexa',
        image: mrBeastImage.store.happyClient.item2,
        avatar: avatarImage.alexaAvatar,
        likesCount: '9k',
        messagesCount: '30',
        verified: true,
        reposts: '40',
        comment: '',
      },
      {
        id: 3,
        date: 'Nov 17',
        viewCount: '34k',
        fullName: 'Dmytro Bondarenko',
        image: mrBeastImage.store.happyClient.item3,
        avatar: avatarImage.dmytroBondarenkoAvatar,
        likesCount: '12k',
        messagesCount: '32',
        verified: true,
        reposts: '41',
        comment: '',
      },
      {
        id: 4,
        date: 'Nov 19',
        viewCount: '37k',
        fullName: 'Samara',
        image: mrBeastImage.store.happyClient.item4,
        avatar: avatarImage.samaraAvatar,
        likesCount: '12k',
        messagesCount: '32',
        verified: true,
        reposts: '41',
        comment: '',
      },
      {
        id: 5,
        date: 'Sep 24',
        viewCount: '40k',
        fullName: 'Artem Pivovarov',
        image: mrBeastImage.store.happyClient.item5,
        avatar: avatarImage.artemPivovarovAvatar,
        likesCount: '16k',
        messagesCount: '17',
        verified: true,
        reposts: '39',
        comment: '',
      },
      {
        id: 6,
        date: 'Sep 02',
        viewCount: '42k',
        fullName: 'Dmytro Bondarenko',
        image: mrBeastImage.store.happyClient.item6,
        avatar: avatarImage.dmytroBondarenkoAvatar,
        likesCount: '18k',
        messagesCount: '18',
        verified: true,
        reposts: '30',
        comment: '',
      },
    ],
  },
  reviews: {
    widgetTitle: 'Reviews',
    data: [
      {
        id: 1,
        date: '15d',
        rating: 3,
        fullName: 'Anna Kushch',
        avatar: avatarImage.annaKushchAvatar,
        comment: 'Wonderful look. I want one more!!!',
      },
      {
        id: 2,
        date: '3d',
        rating: 2,
        fullName: 'Alexa',
        avatar: avatarImage.alexaAvatar,
        comment:
          'This merch is top-tier! The design is clean, the material feels high-quality, and it’s super comfortable to wear. Definitely worth it!',
      },
      {
        id: 3,
        date: '4d',
        rating: 2,
        fullName: 'Dmytro Bondarenko',
        avatar: avatarImage.dmytroBondarenkoAvatar,
        comment:
          'Not bad, but I expected a bit more for the price. The design is cool, but the material could be thicker for a premium feel.',
      },
      {
        id: 4,
        date: '5d',
        rating: 4,
        fullName: 'Samara',
        avatar: avatarImage.samaraAvatar,
        comment:
          'Honestly impressed! The print stays vibrant even after multiple washes, and the fabric is soft. A must-have for any fan!',
      },
      {
        id: 5,
        date: '5d',
        rating: 5,
        fullName: 'Artem Pivovarov',
        avatar: avatarImage.artemPivovarovAvatar,
        comment:
          'Love the creativity behind this merch! It really captures the brand’s vibe, but I wish there were more color options to choose from.',
      },
    ],
  },
};
