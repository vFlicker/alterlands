import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { TypographyVariantToCss } from './Typography';

const StyledLabel = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 3px 12px;
  border: 1px solid ${Color.WHITE_30};
  border-radius: ${Radius.RADIUS_100};

  color: ${Color.WHITE_70};
  ${TypographyVariantToCss['body-5']}
  line-height: 1.5;
`;

export { StyledLabel as Label };
