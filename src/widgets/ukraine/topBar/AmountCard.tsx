import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Typography } from '~/shared/ui/atoms/Typography';
import { Select } from '~/shared/ui/molecules/Select';
import { withAttrs } from '~/shared/ui/withAttrs';

import { Icon } from '../../../shared/ui/atoms/Icon';
import { IconButton } from '../../../shared/ui/atoms/IconButton';
import { AmountCardData, Rate } from './topBarTypes';

type AmountCardProps = AmountCardData & {
  className?: string;
};

const currencyOptions = [
  { label: 'USD', value: 'USD' },
  { label: 'UAH', value: 'UAH' },
  { label: 'EUR', value: 'EUR' },
];

function AmountCard({
  className,
  amount,
  content,
  rate,
  title,
}: AmountCardProps): JSX.Element {
  const rateSign = rate === 'increase' ? '+' : '-';
  const arrow = rate === 'increase' ? '▲' : '▼';

  return (
    <StyledAmountCardWrapper className={className}>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledInfoButton>
          <Icon name="icon-info" />
        </StyledInfoButton>
      </StyledHeader>
      <StyledContent $rate={rate}>
        {rateSign}
        {content} {arrow} past year
      </StyledContent>
      <StyledFooter>
        <StyledAmount>{amount}</StyledAmount>
        <Select
          options={currencyOptions}
          size="small"
          variant="empty"
          value={currencyOptions[0].value}
        />
      </StyledFooter>
    </StyledAmountCardWrapper>
  );
}

export { AmountCard };

const getContentColorCss = (rate: Rate) => {
  if (rate === 'increase') {
    return css`
      color: ${Color.GREEN_5};
    `;
  }

  return css`
    color: ${Color.RED_7};
  `;
};

const StyledAmountCardWrapper = styled.div`
  width: 100%;
  max-width: 223px;
  padding: 12px;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_8};
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const StyledTitle = withAttrs(
  { variant: 'body-3', as: 'h3', $color: Color.WHITE_64 },
  Typography,
);

const StyledInfoButton = withAttrs(
  { color: 'transparent', variant: 'filled', size: 'small' },
  styled(IconButton)`
    width: 20px;
    height: 20px;

    svg {
      width: inherit;
      height: inherit;
      stroke: ${Color.WHITE_42};
    }

    &:hover {
      svg {
        stroke: ${Color.WHITE_98};
      }
    }
  `,
);

const StyledContent = withAttrs(
  { variant: 'body-1', as: 'h3' },
  styled(Typography)`
    margin-bottom: 20px;
    ${({ $rate }: { $rate: Rate }) => getContentColorCss($rate)};
  `,
);

const StyledFooter = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyledAmount = withAttrs(
  { variant: 'heading-1', as: 'span' },
  Typography,
);
