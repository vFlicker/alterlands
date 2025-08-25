import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

function TransactionDetails() {
  return (
    <div>
      <StyledHeader>
        <StyledTitle>Transaction Details</StyledTitle>
      </StyledHeader>
      <StyledText>
        We ended up paying twice for this development service, as the initial
        result didn’t meet our expectations. The company that provided the
        service failed to take proper responsibility.
      </StyledText>
    </div>
  );
}

export { TransactionDetails };

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${Color.WHITE_16};
`;

const StyledTitle = withAttrs(
  { variant: 'heading-3' },
  styled(Typography)`
    text-transform: capitalize;
  `,
);

const StyledText = withAttrs(
  { variant: 'body-3' },
  styled(Typography)`
    line-height: 24px;
  `,
);
