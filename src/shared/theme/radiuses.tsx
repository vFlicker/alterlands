import { css } from '@emotion/react';

const enum Radius {
  RADIUS_10 = 'var(--radius-10)',
  RADIUS_16 = 'var(--radius-16)',
}

const globalRadiuses = css`
  :root {
    --radius-10: 2px;
    --radius-16: 16px;
  }
`;

export { globalRadiuses, Radius };
