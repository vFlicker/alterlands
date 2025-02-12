export type DiscussionData = {
  id: number;
  avatar: string;
  fullName: string;
  date: string;
  viewCount: string;
  title: string;
  likesCount: string;
  messagesCount: string;
  reposts: string;
  answers: {
    id: number;
    avatar: string;
    fullName: string;
    date: string;
    viewCount: string;
    message: string;
    likesCount: string;
    reposts: string;
    label: string;
  }[];
};
