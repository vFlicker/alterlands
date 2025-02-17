type Candidate = {
  id: number;
  name: string;
  imageUrl: string;
  votes: number;
  color: 'blue' | 'red' | 'green';
};

type Comment = {
  id: number;
  avatar: string;
  fullName: string;
  date: string;
  message: string;
  likesCount: string;
  reposts: string;
};

export type OpinionData = {
  candidates: Candidate[];
  comments: Comment[];
};
