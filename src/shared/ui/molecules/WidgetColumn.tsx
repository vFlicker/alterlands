import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX, PropsWithChildren } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

type WidgetColumnProps = PropsWithChildren<{
  title: string;
  columns?: 1 | 2 | 3;
  actionButton?: JSX.Element;
  className?: string;
}>;

function WidgetColumn({
  className,
  title,
  columns,
  actionButton,
  children,
}: WidgetColumnProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        {actionButton}
      </StyledHeader>

      <StyledListWrapper columns={columns}>{children}</StyledListWrapper>
    </StyledWrapper>
  );
}

export { WidgetColumn };

const ContentColumnsToCss = {
  1: css`
    flex-direction: column;
    gap: 14px;

    & > div {
      position: relative;

      &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: -6px;
        width: 100%;
        height: 1px;
        background-color: ${Color.WHITE_16};
      }
    }
  `,
  2: css`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  `,
  3: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `,
};

const StyledWrapper = styled.div`
  padding: 20px 16px;
  border-radius: ${Radius.RADIUS_16};
  background-color: ${Color.DARK};
`;

const StyledTitle = withAttrs({ variant: 'heading-3' }, Typography);

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 4px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${Color.WHITE_16};
`;

const StyledListWrapper = styled.div<Pick<WidgetColumnProps, 'columns'>>`
  display: flex;
  ${({ columns = 1 }) => ContentColumnsToCss[columns]}
`;
