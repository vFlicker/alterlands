import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

type TransactionProps = {
  className?: string;
  id: number;
  name: string;
  records: string[];
};

function Transaction({
  className,
  id,
  name,
  records,
}: TransactionProps): JSX.Element {
  return (
    <StyledTransactionWrapper className={className} key={id}>
      <StyledTitle>{id}.</StyledTitle>
      <StyledTitle>{name}</StyledTitle>
      <StyledRecordList>
        {records.map((record) => (
          <StyledRecord key={record}>{record}</StyledRecord>
        ))}
      </StyledRecordList>
      <StyledButton>
        <Icon name={'icon-chevron-up'} />
      </StyledButton>
    </StyledTransactionWrapper>
  );
}

export { Transaction };

const StyledTransactionWrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns:
    20px minmax(min-content, 320px) minmax(min-content, 468px)
    auto;
  align-items: start;
`;

const StyledTitle = withAttrs({ variant: 'body-1' }, Typography);

const StyledRecordList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 24px;
`;

const StyledRecord = withAttrs(
  { variant: 'body-3' },
  styled(Typography)`
    color: ${Color.WHITE_64};
  `,
);

const StyledButton = withAttrs(
  {
    color: 'transparent',
    variant: 'filled',
    size: 'small',
  },
  styled(IconButton)`
    position: relative;
    top: -4px;
    margin-left: auto;
  `,
);
