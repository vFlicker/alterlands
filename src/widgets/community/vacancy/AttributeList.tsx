import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorDotCss } from '~/shared/ui/css/separatorDotCss';
import { withAttrs } from '~/shared/ui/withAttrs';

type AttributeListProps = {
  className?: string;
  attributes: string[];
};

function AttributeList({
  className,
  attributes,
}: AttributeListProps): JSX.Element {
  return (
    <StyledAttributeList className={className}>
      {attributes.map((attribute) => (
        <StyledJubAttribute key={attribute}>{attribute}</StyledJubAttribute>
      ))}
    </StyledAttributeList>
  );
}

export { AttributeList as AttributeList };

const StyledAttributeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 26px;
  row-gap: 2px;
`;

const StyledJubAttribute = withAttrs(
  { variant: 'body-2', $color: Color.WHITE_70 },
  styled(Typography)`
    ${separatorDotCss}
  `,
);
