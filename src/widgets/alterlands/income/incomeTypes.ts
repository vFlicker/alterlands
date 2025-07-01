export type IncomeData = {
  id: number;
  transactionId: string;
  timestamp: string;
  transactionTitle: string;
  signedBy: string;
  amount: number;
  currency: string;
  reportsAndDetails: string[];
};
