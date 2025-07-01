import styled from '@emotion/styled';
import { JSX } from 'react';

import { IncomeWidget } from '~/widgets/alterlands/income';
import { ContentSection } from '~/widgets/ContentSection';
import { TopBar } from '~/widgets/ukraine/topBar';

import { alterlandsPageData } from './alterlandsPageData';

function AlterlandBudgetPage(): JSX.Element {
  return (
    <>
      <StyledTopBar {...alterlandsPageData.header} />
      <StyledContentSection menu={alterlandsPageData.menu} />
      <IncomeWidget {...alterlandsPageData.incoming} />
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
