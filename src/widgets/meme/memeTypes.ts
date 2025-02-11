export const enum MemeSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export type MemeData = {
  id: number;
  date: string;
  viewCount: string;
  fullName: string;
  image: string;
  avatar: string;
  likesCount: string;
  messagesCount: string;
  reposts: string;
  size: `${MemeSize}`;
};
