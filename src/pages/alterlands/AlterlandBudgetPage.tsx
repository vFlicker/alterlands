import styled from '@emotion/styled';
import { JSX } from 'react';

import { AssetsWidget } from '~/widgets/alterlands/assets';
import { FinancialTransactionsWidget } from '~/widgets/alterlands/financialTransactions';
import { ContentSection } from '~/widgets/ContentSection';
import { TopBar } from '~/widgets/ukraine/topBar';

import { alterlandsPageData } from './alterlandsPageData';

function AlterlandBudgetPage(): JSX.Element {
  return (
    <>
      <StyledTopBar {...alterlandsPageData.header} />
      <StyledContentSection menu={alterlandsPageData.menu} />
      <StyledFinancialTransactionsWidget
        {...alterlandsPageData.financialTransactions}
      />
      <AssetsWidget {...alterlandsPageData.assets} />
    </>
  );
}

export { AlterlandBudgetPage };

const StyledTopBar = styled(TopBar)`
  margin-bottom: 24px;
`;

const StyledContentSection = styled(ContentSection)`
  margin-bottom: 16px;
`;

const StyledFinancialTransactionsWidget = styled(FinancialTransactionsWidget)`
  margin-bottom: 16px;
`;
