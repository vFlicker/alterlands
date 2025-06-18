export type AmountCardData = {
  id: number;
  title: string;
  rate?: {
    direction: 'increase' | 'decrease';
    value: string;
    postfix: string;
  };
  amount: string;
};
