export type AssetsData = {
  amountCards: {
    id: number;
    title: string;
    amount: string;
  }[];
  transactions: {
    id: number;
    name: string;
    records: string[];
  }[];
};
