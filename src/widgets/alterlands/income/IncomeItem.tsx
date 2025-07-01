import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { IncomeData } from './incomeTypes';

type IncomeItemProps = IncomeData & {
  className?: string;
};

function IncomeItem({
  className,
  amount,
  currency,
  reportsAndDetails,
  signedBy,
  timestamp,
  transactionId,
  transactionTitle,
}: IncomeItemProps): JSX.Element {
  return (
    <StyledIncomeItemWrapper className={className}>
      <StylesText>{transactionTitle}</StylesText>
      <StylesText>{new Date(timestamp).toLocaleDateString()}</StylesText>
      <StylesText>
        {amount} {currency}
      </StylesText>
      <StylesText>Signed by: {signedBy}</StylesText>
      <StylesText>Transaction ID: {transactionId}</StylesText>
      {reportsAndDetails && reportsAndDetails.length > 0 && (
        <ul>
          {reportsAndDetails.map((report) => (
            <li key={report}>{report}</li>
          ))}
        </ul>
      )}
    </StyledIncomeItemWrapper>
  );
}

export { IncomeItem };

const StyledIncomeItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding-top: 4px;
`;

const StylesText = withAttrs({ variant: 'body-2' }, Typography);
