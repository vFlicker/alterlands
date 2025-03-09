import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Typography } from '~/shared/ui/atoms/Typography';
import { Select } from '~/shared/ui/molecules/Select';
import { withAttrs } from '~/shared/ui/withAttrs';

import { SalaryBenchmarkCard } from './SalaryBenchmarkCard';
import { SalaryBenchmarkData } from './salaryBenchmarkTypes';

type SalaryBenchmarkProps = {
  data: SalaryBenchmarkData[];
  className?: string;
};

const salaryLevels = [
  { value: 'Junior', label: 'Junior' },
  { value: 'Middle', label: 'Middle' },
  { value: 'Senior', label: 'Senior' },
];

function SalaryBenchmark({
  className,
  data,
}: SalaryBenchmarkProps): JSX.Element {
  return (
    <StyledSalaryBenchmarkWrapper className={className}>
      <StyledTitle>
        This job is ranked 15th in terms of income in Ukraine
      </StyledTitle>
      <StyledHeaderWrapper>
        <StyledSubtitle>Salary rate</StyledSubtitle>
        <StyledSelect options={salaryLevels} value={salaryLevels[0].value} />
      </StyledHeaderWrapper>

      <StyledCardsWrapper>
        {data.map((item) => (
          <SalaryBenchmarkCard key={item.title} {...item} />
        ))}
      </StyledCardsWrapper>
    </StyledSalaryBenchmarkWrapper>
  );
}

export { SalaryBenchmark };

const StyledSalaryBenchmarkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  styled(Typography)`
    margin-bottom: 10px;
  `,
);

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const StyledSelect = withAttrs(
  { size: 'small', variant: 'outlined' },
  styled(Select)`
    width: 88px;
  `,
);

const StyledSubtitle = withAttrs({ variant: 'heading-5' }, Typography);

const StyledCardsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
