import { css } from '@emotion/react';

const enum Radius {
  RADIUS_4 = 'var(--radius-4)',
  RADIUS_10 = 'var(--radius-10)',
  RADIUS_16 = 'var(--radius-16)',
  RADIUS_24 = 'var(--radius-24)',
  RADIUS_50 = 'var(--radius-50)',
  RADIUS_120 = 'var(--radius-120)',
  RADIUS_CIRCLE = 'var(--radius-circle)',
}

const globalRadiuses = css`
  :root {
    --radius-4: 4px;
    --radius-10: 2px;
    --radius-16: 16px;
    --radius-24: 24px;
    --radius-50: 50px;
    --radius-120: 120px;
    --radius-circle: 50%;
  }
`;

export { globalRadiuses, Radius };
