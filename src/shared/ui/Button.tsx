import styled from '@emotion/styled';

import { Color } from '../theme/colors';

const StyledButton = styled('button')`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${Color.ACCENT};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export { StyledButton as Button };
