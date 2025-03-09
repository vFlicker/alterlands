export type SalaryBenchmarkData = {
  id: string;
  title: string;
  rate: {
    direction: 'increase' | 'decrease';
    value: string;
    postfix: string;
  };
  amount: string;
  imageUrl: string;
};
