import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Chip } from '~/shared/ui/atoms/Chip';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { TypographyVariantToCss } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { statusColor } from './financialTransactionsConfig';
import { FinancialTransactionData } from './financialTransactionTypes';

type FinancialTransactionProps = FinancialTransactionData & {
  className?: string;
  onClick: () => void;
};

const formatDateToEnUS = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

function FinancialTransaction({
  className,
  amount,
  currency,
  reportsAndDetails,
  status,
  signedBy,
  timestamp,
  transactionId,
  transactionTitle,
  onClick,
}: FinancialTransactionProps): JSX.Element {
  return (
    <StyledFinancialTransactionWrapper className={className}>
      <StyledLeft>
        <div>{transactionId}</div>
        <div>{formatDateToEnUS(new Date(timestamp))}</div>
        <div>{transactionTitle}</div>
      </StyledLeft>
      <StyledRight>
        <div>{signedBy}</div>
        <StyledChip color={statusColor[status]}>{status}</StyledChip>
        <StyledAmount>{amount}</StyledAmount>
        <StyledCurrency>{currency}</StyledCurrency>
        <StyledReportsList>
          {reportsAndDetails.map(({ name, active }) => (
            <StyledReportsItem isActive={active} key={name}>
              {name}
            </StyledReportsItem>
          ))}
          <StyledIconButton onClick={onClick}>
            <Icon name="icon-maximize" />
          </StyledIconButton>
        </StyledReportsList>
      </StyledRight>
    </StyledFinancialTransactionWrapper>
  );
}

export { FinancialTransaction };

const StyledFinancialTransactionWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;

  width: 100%;
  padding: 12px;

  background-color: ${Color.WHITE_5};

  ${TypographyVariantToCss['body-3']};
`;

const StyledLeft = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 100px 100px 200px;
`;

const StyledRight = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 100px 100px 100px 100px minmax(500px, 1fr);

  @media (max-width: 1900px) {
    grid-template-columns: 100px 100px 100px 100px;
  }
`;

const StyledAmount = styled.div`
  margin-left: auto;
`;

const StyledCurrency = styled.div`
  @media (max-width: 1900px) {
    display: none;
  }
`;

const StyledReportsList = styled.ul`
  display: flex;
  justify-self: flex-end;
  flex-wrap: nowrap;
  gap: 33px;

  @media (max-width: 1900px) {
    display: none;
  }
`;

const StyledReportsItem = styled.li<{ isActive: boolean }>`
  position: relative;

  white-space: nowrap;
  color: ${Color.ACCENT};

  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -17px;
    bottom: 0;

    width: 1px;
    height: 100%;

    background-color: ${Color.WHITE_30};
  }

  ${({ isActive }) =>
    !isActive &&
    `
    color: ${Color.ACCENT_3};
    cursor: not-allowed;
  `}
`;

const StyledChip = withAttrs(
  { size: 'small' },
  styled(Chip)`
    justify-self: start;
  `,
);

const StyledIconButton = withAttrs(
  {
    size: 'small',
    variant: 'filled',
    color: 'transparent',
  },
  styled(IconButton)`
    width: 16px;
    height: 16px;

    svg {
      width: 16px;
      height: 16px;
      stroke: ${Color.WHITE_87};
    }
  `,
);
