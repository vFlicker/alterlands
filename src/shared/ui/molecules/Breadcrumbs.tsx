import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';

import { Typography } from '../atoms/Typography';
import { withAttrs } from '../withAttrs';

type BreadcrumbsProps = {
  items: string[];
  className?: string;
};

function Breadcrumbs({ className, items }: BreadcrumbsProps): JSX.Element {
  return (
    <StyledBreadcrumbsWrapper className={className}>
      {items.map((item) => (
        <StyledText key={item}>{item}</StyledText>
      ))}
    </StyledBreadcrumbsWrapper>
  );
}

const StyledBreadcrumbsWrapper = styled.div`
  display: flex;
  gap: 21px;

  & > *:not(:last-child) {
    position: relative;

    &:after {
      content: '/';
      position: absolute;
      right: -14px;
    }
  }
`;

const StyledText = withAttrs(
  {
    variant: 'body-5',
    $color: Color.WHITE_64,
  },
  Typography,
);

export { Breadcrumbs };
