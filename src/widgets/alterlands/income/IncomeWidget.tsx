import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { Modal } from '~/shared/ui/molecules/Modal';
import { SliderFooter } from '~/shared/ui/molecules/SliderFooter';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { IncomeHeader } from './IncomeHeader';
import { IncomeItem } from './IncomeItem';
import { IncomeData } from './incomeTypes';
import { TransactionDetails } from './TransactionDetails';

type IncomeWidgetProps = {
  widgetTitle: string;
  data: IncomeData[];
  className?: string;
};

function IncomeWidget({
  className,
  data,
  widgetTitle,
}: IncomeWidgetProps): JSX.Element {
  const [showModal, setShowDialogModal] = useState(false);

  return (
    <StyledIncomeWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={
          <IconButton size="small" variant="filled" color="transparent">
            <Icon name="icon-chevron-down" />
          </IconButton>
        }
      />

      <StyledIncomeTable>
        <IncomeHeader />
        <StyledSocialList>
          {data.map((income) => (
            <IncomeItem
              key={income.id}
              onClick={() => setShowDialogModal(true)}
              {...income}
            />
          ))}
        </StyledSocialList>
      </StyledIncomeTable>
      <SliderFooter />

      <StyledModal isOpen={showModal} onClose={() => setShowDialogModal(false)}>
        <TransactionDetails />
      </StyledModal>
    </StyledIncomeWidgetWrapper>
  );
}

export { IncomeWidget };

const StyledIncomeWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledIncomeTable = styled.div`
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
