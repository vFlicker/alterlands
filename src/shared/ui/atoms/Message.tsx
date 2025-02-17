import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';

import { TypographyVariantToCss } from './Typography';

const StyledMessage = styled.div`
  display: inline-flex;
  padding: 8px;
  border-radius: 8px;

  ${TypographyVariantToCss['body-3']}

  background-color: ${Color.WHITE_8};
`;

export { StyledMessage as Message };
