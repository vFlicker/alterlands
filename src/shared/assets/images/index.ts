import { avatar } from './avatars';
import { favoriteImages } from './favorites';
import {
  leaderboards,
  meme as formula1Meme,
  pro,
  teamLeaderboards,
  upcomingRaces,
} from './formula1';
import iconUkraine from './icon-ukraine.png';
import logo from './logo.svg';
import { meme as ukraineMeme, post as ukrainePost } from './ukraine';
import { meme as usPoliticsMeme } from './usPolitics';

export const Image = {
  favorites: favoriteImages,
  formula1Page: {
    meme: formula1Meme,
    pro: pro,
    upcomingRaces: upcomingRaces,
    leaderboards: leaderboards,
    teamLeaderboards: teamLeaderboards,
  },
  ukrainePage: {
    meme: ukraineMeme,
    post: ukrainePost,
  },
  usPolitics: {
    meme: usPoliticsMeme,
  },
  avatar: {
    currentUser: avatar.annaKushchAvatar,
    ...avatar,
  },
  other: {
    iconUkraine,
    logo,
  },
};
