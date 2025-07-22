import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { AmountCard } from '~/widgets/ukraine/topBar/AmountCard';

import { AssetsData } from './assetsTypes';
import { Transaction } from './Transaction';

type AssetsWidgetProps = {
  widgetTitle: string;
  data: AssetsData;
  className?: string;
};

function AssetsWidget({
  className,
  widgetTitle,
  data,
}: AssetsWidgetProps): JSX.Element {
  const { amountCards, transactions } = data;

  return (
    <StyledAssetsWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledContent>
        <StyledCardsWrapper>
          {amountCards.map((cardData) => (
            <StyledAmountCard key={cardData.id} {...cardData} />
          ))}
        </StyledCardsWrapper>

        <StyledTransactionsList>
          {transactions.map((transaction) => (
            <StyledTransaction key={transaction.id} {...transaction} />
          ))}
        </StyledTransactionsList>
      </StyledContent>
    </StyledAssetsWidgetWrapper>
  );
}

export { AssetsWidget };

const StyledAssetsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledContent = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 616px 1fr;
  gap: 40px;

  @media (max-width: 1520px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

const StyledCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 1520px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledAmountCard = styled(AmountCard)`
  max-width: 300px;
`;

const StyledTransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

const StyledTransaction = styled(Transaction)`
  &:not(:last-child) {
    ${separatorLineCss(17, Color.WHITE_16)}
  }
`;
