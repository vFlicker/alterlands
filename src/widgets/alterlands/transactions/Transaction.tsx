import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Icon } from '~/shared/ui/atoms/Icon';
import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorDotCss } from '~/shared/ui/css/separatorDotCss';
import { withAttrs } from '~/shared/ui/withAttrs';

import { TransactionData } from './transactionTypes';

type TransactionProps = TransactionData & {
  className?: string;
};

const arrowIcon = {
  increase: 'icon-arrow-up-left',
  decrease: 'icon-arrow-down-right',
} as const;

function Transaction({
  className,
  title,
  date,
  direction,
  value,
}: TransactionProps): JSX.Element {
  return (
    <StyledTransactionWrapper className={className}>
      <StyledData>
        <StyledTitle>{title}</StyledTitle>
        <StyledDate>{date}</StyledDate>
      </StyledData>
      <StyledValuerWrapper>
        <StyledValue>{value}</StyledValue>
        <StyledIcon direction={direction} name={arrowIcon[direction]} />
      </StyledValuerWrapper>
    </StyledTransactionWrapper>
  );
}

export { Transaction };

const StyledTransactionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 8px 12px;
  border-radius: ${Radius.RADIUS_4};
  background-color: ${Color.WHITE_5};
`;

const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledTitle = withAttrs({ variant: 'heading-5', as: 'h2' }, Typography);

const StyledDate = withAttrs(
  { variant: 'body-3', as: 'p', $color: Color.WHITE_64 },
  styled(Typography)`
    ${separatorDotCss}
  `,
);

const StyledValuerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledValue = withAttrs({ variant: 'body-1', as: 'p' }, Typography);

const StyledIcon = styled(Icon)<{ direction: TransactionProps['direction'] }>`
  width: 12px;
  height: 12px;

  color: ${({ direction }) =>
    direction === 'increase' ? Color.GREEN_5 : Color.RED_7};
`;
