import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { RateLine } from '~/shared/ui/atoms/RateLine';
import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { withAttrs } from '~/shared/ui/withAttrs';

import { SalaryBenchmarkData } from './salaryBenchmarkTypes';

type SalaryBenchmarkCardProps = SalaryBenchmarkData & {
  className?: string;
};

function SalaryBenchmarkCard({
  className,
  amount,
  imageUrl,
  rate,
  title,
}: SalaryBenchmarkCardProps): JSX.Element {
  return (
    <StyledSalaryBenchmarkCardWrapper className={className}>
      <StyledContentWrapper>
        <StyledText>{title}</StyledText>
        <RateLine {...rate} />
        <StyledAmount>${amount}</StyledAmount>
        <StyledText>{rate.postfix}</StyledText>
      </StyledContentWrapper>
      <StyledImage src={imageUrl} />
    </StyledSalaryBenchmarkCardWrapper>
  );
}

export { SalaryBenchmarkCard };

const StyledSalaryBenchmarkCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 16px 12px 12px 12px;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_8};
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;

  ${separatorLineCss(14, Color.WHITE_16)}
`;

const StyledText = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  styled(Typography)`
    margin-bottom: 4px;
  `,
);

const StyledAmount = withAttrs(
  { variant: 'heading-1' },
  styled(Typography)`
    margin-bottom: 4px;
  `,
);

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
