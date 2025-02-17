import { ChipColor } from '~/shared/ui/atoms/Chip';

type Label = {
  text: string;
  color: `${ChipColor}`;
};

type Answer = {
  id: number;
  avatar: string;
  fullName: string;
  verified: boolean;
  date: string;
  viewCount: string;
  message: string;
  likesCount: string;
  reposts: string;
  label: Label;
};

export type DiscussionData = {
  id: number;
  avatar: string;
  fullName: string;
  verified: boolean;
  date: string;
  viewCount: string;
  title: string;
  likesCount: string;
  messagesCount: string;
  reposts: string;
  answers: Answer[];
};
