export type Rate = 'increase' | 'decrease';

export type AmountCardData = {
  id: number;
  title: string;
  rate: Rate;
  content: string;
  amount: string;
};
