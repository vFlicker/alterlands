import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { Tab } from '~/shared/ui/atoms/Tab';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { Modal } from '~/shared/ui/molecules/Modal';
import { SliderFooter } from '~/shared/ui/molecules/SliderFooter';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { FinancialTransaction } from './FinancialTransaction';
import { FinancialTransactionsHeader } from './FinancialTransactionsHeader';
import { FinancialTransactionData } from './financialTransactionTypes';
import { TransactionDetails } from './TransactionDetails';

type FinancialTransactionsWidgetProps = {
  widgetTitle: string;
  data: {
    income: FinancialTransactionData[];
    expenses: FinancialTransactionData[];
  };
  className?: string;
};

function FinancialTransactionsWidget({
  className,
  data,
  widgetTitle,
}: FinancialTransactionsWidgetProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Income');
  const [showModal, setShowDialogModal] = useState(false);

  const transactions = data[activeTab.toLowerCase() as 'income' | 'expenses'];

  return (
    <StyledFinancialTransactionsWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledNavMenu>
        {['Income', 'Expenses'].map((tabName) => {
          const selected = activeTab === tabName;

          return (
            <Tab
              key={tabName}
              color="default"
              variant="underline"
              selected={selected}
              onClick={() => setActiveTab(tabName)}
            >
              {tabName}
            </Tab>
          );
        })}
      </StyledNavMenu>

      <StyledFinancialTransactionTable>
        <FinancialTransactionsHeader />
        <StyledSocialList>
          {transactions.map((financialTransaction) => (
            <FinancialTransaction
              key={financialTransaction.id}
              onClick={() => setShowDialogModal(true)}
              {...financialTransaction}
            />
          ))}
        </StyledSocialList>
      </StyledFinancialTransactionTable>
      <SliderFooter />

      <StyledModal isOpen={showModal} onClose={() => setShowDialogModal(false)}>
        <TransactionDetails />
      </StyledModal>
    </StyledFinancialTransactionsWidgetWrapper>
  );
}

export { FinancialTransactionsWidget };

const StyledFinancialTransactionsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledNavMenu = styled.div`
  margin-bottom: 32px;
`;

const StyledFinancialTransactionTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 16px;
`;

const StyledSocialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledModal = styled(Modal)`
  max-width: 680px;
`;
