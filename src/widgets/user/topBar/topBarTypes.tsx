type AdditionalInfo = {
  count: string;
  label: string;
};

export type UserData = {
  name: string;
  avatarUrl: string;
  email: string;
  birthday: string;
  description: string;
  additionalInfo: AdditionalInfo[];
};
