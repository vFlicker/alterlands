import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';

import { TypographyVariantToCss } from './Typography';

type RateDirection = 'increase' | 'decrease';

export type RateLineProps = {
  direction: RateDirection;
  value: string;
  postfix: string;
  className?: string;
};

function RateLine({
  className,
  direction,
  value,
  postfix,
}: RateLineProps): JSX.Element {
  const rateSign = direction === 'increase' ? '+' : '-';
  const arrow = direction === 'increase' ? '▲' : '▼';

  return (
    <StyledRateLineWrapper className={className} $rateDirection={direction}>
      {rateSign}
      {value} {arrow} {postfix}
    </StyledRateLineWrapper>
  );
}

export { RateLine };

const getColor = (rate: RateDirection) => {
  if (rate === 'increase') return Color.GREEN_5;
  return Color.RED_7;
};

const StyledRateLineWrapper = styled.div`
  margin-bottom: 20px;

  ${TypographyVariantToCss['body-1']}

  ${({ $rateDirection: $rate }: { $rateDirection: RateDirection }) =>
    `color: ${getColor($rate)};`}
`;
