import styled from '@emotion/styled';
import { JSX } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Transaction } from './Transaction';
import { TransactionData } from './transactionTypes';

type TransactionsWidgetProps = {
  widgetTitle: string;
  data: TransactionData[];
  className?: string;
};

function TransactionsWidget({
  widgetTitle,
  data,
  className,
}: TransactionsWidgetProps): JSX.Element {
  return (
    <StyledTransactionsWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={<LabelButton color="white">See more</LabelButton>}
      />

      <StyledTransactionList>
        {data.map((topic) => (
          <Transaction key={topic.id} {...topic} />
        ))}
      </StyledTransactionList>
    </StyledTransactionsWidgetWrapper>
  );
}

export { TransactionsWidget };

const StyledTransactionsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledTransactionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
