import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { TypographyVariantToCss } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

type FinancialTransactionsHeaderProps = {
  className?: string;
};

function FinancialTransactionsHeader({
  className,
}: FinancialTransactionsHeaderProps): JSX.Element {
  return (
    <StyledFinancialTransactionsHeaderWrapper className={className}>
      <StyledLeft>
        <StyledText>Transaction ID</StyledText>
        <StyledText>
          Time Stamp
          <StyledIconButton>
            <Icon name="icon-chevron-down" />
          </StyledIconButton>
        </StyledText>
        <StyledText>Transaction Title</StyledText>
      </StyledLeft>
      <StyledRight>
        <StyledText>Signed by</StyledText>
        <StyledText>
          Status{' '}
          <StyledIconButton>
            <Icon name="icon-chevron-down" />
          </StyledIconButton>
        </StyledText>
        <StyledText>
          Amount
          <StyledIconButton>
            <Icon size="medium" name="icon-filter" />
          </StyledIconButton>
        </StyledText>
        <StyledCurrency>Currency</StyledCurrency>
        <StyledReports>Reports & Transaction Details</StyledReports>
      </StyledRight>
    </StyledFinancialTransactionsHeaderWrapper>
  );
}

export { FinancialTransactionsHeader };

const StyledFinancialTransactionsHeaderWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;

  width: 100%;
  padding: 0 12px;
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

const StyledText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${Color.WHITE_64};
  ${TypographyVariantToCss['body-5']};
`;

const StyledCurrency = styled(StyledText)`
  @media (max-width: 1900px) {
    display: none;
  }
`;

const StyledReports = styled(StyledText)`
  @media (max-width: 1900px) {
    display: none;
  }
`;

const StyledIconButton = withAttrs(
  { color: 'transparent', variant: 'filled', size: 'small' },
  styled(IconButton)`
    width: 16px;
    height: 16px;

    svg {
      width: 16px;
      height: 16px;
    }
  `,
);
