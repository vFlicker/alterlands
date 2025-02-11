import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';

import { Typography } from '../atoms/Typography';
import { withAttrs } from '../withAttrs';

type WidgetHeaderProps = {
  title: string;
  actions?: JSX.Element;
  className?: string;
};

function WidgetHeader({
  title,
  actions,
  className,
}: WidgetHeaderProps): JSX.Element {
  return (
    <StyledWidgetHeaderWrapper className={className}>
      <StyledTitle>{title}</StyledTitle>
      {actions}
    </StyledWidgetHeaderWrapper>
  );
}

export { WidgetHeader };

const StyledWidgetHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 4px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${Color.WHITE_16};
`;

const StyledTitle = withAttrs({ variant: 'heading-3' }, Typography);
