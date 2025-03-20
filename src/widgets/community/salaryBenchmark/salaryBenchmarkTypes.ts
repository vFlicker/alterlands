export type SalaryBenchmarkData = {
  id: number;
  title: string;
  rate: {
    direction: 'increase' | 'decrease';
    value: string;
    postfix: string;
  };
  amount: string;
  imageUrl: string;
};
