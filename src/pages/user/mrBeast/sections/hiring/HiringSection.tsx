import styled from '@emotion/styled';
import { JSX } from 'react';

import { RequestWidget } from '~/widgets/community/request';
import { SalaryBenchmarkWidget } from '~/widgets/community/salaryBenchmark';
import { VacancyWidget } from '~/widgets/community/vacancy';
import { EmployerReviewWidget } from '~/widgets/user/employerReview';

import { hiringSectionData } from './hiringSectionData';

function HiringSection(): JSX.Element {
  return (
    <StyledHiringSectionWrapper>
      <StyledCol>
        <VacancyWidget theme="dark" {...hiringSectionData.vacancies} />
      </StyledCol>
      <StyledCol>
        <SalaryBenchmarkWidget
          theme="dark"
          {...hiringSectionData.salaryBenchmark}
        />
        <EmployerReviewWidget />
        <RequestWidget {...hiringSectionData.request} />
      </StyledCol>
    </StyledHiringSectionWrapper>
  );
}

export { HiringSection };

const StyledHiringSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
