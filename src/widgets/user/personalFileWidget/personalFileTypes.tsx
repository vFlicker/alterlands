export type LogData = {
  date: string;
  text: string;
  importantText?: string;
  link?: string;
  secondaryLink?: string;
  additional?: string;
};

export type PersonalFileData = {
  title: string;
  items: LogData[];
};
