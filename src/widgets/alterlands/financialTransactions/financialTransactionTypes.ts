export type Status =
  | 'Ready to pay'
  | 'Paid'
  | 'In progress'
  | 'TBD'
  | 'Cancelled'
  | 'Rejected';

export type FinancialTransactionData = {
  id: number;
  transactionId: string;
  timestamp: string;
  transactionTitle: string;
  status: Status;
  signedBy: string;
  amount: number;
  currency: string;
  reportsAndDetails: string[];
};
