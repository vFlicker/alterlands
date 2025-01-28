import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { Color } from '~/shared/theme/colors';

type TypographyProps = PropsWithChildren<{
  variant: `${TypographyVariant}`;
}>;

const enum TypographyVariant {
  HEADING_1 = 'heading-1',
  HEADING_2 = 'heading-2',
  HEADING_3 = 'heading-3',
  HEADING_4 = 'heading-4',
  HEADING_5 = 'heading-5',
  BODY_1 = 'body-1',
  BODY_2 = 'body-2',
  BODY_3 = 'body-3',
  BODY_4 = 'body-4',
  BODY_5 = 'body-5',
}

const TypographyVariantToCSS = {
  [TypographyVariant.HEADING_1]: css`
    font-size: 36px;
    line-height: 1.17;
    font-weight: 700;
  `,
  [TypographyVariant.HEADING_2]: css`
    font-size: 32px;
    line-height: 1.31;
    font-weight: 500;
  `,
  [TypographyVariant.HEADING_3]: css`
    font-size: 24px;
    line-height: 1.42;
    font-weight: 500;
  `,
  [TypographyVariant.HEADING_4]: css`
    font-size: 20px;
    line-height: 1.2;
    font-weight: 600;
  `,
  [TypographyVariant.HEADING_5]: css`
    font-size: 16px;
    line-height: 1.25;
    font-weight: 600;
  `,
  [TypographyVariant.BODY_1]: css`
    font-size: 14px;
    line-height: 1.43;
    font-weight: 600;
  `,
  [TypographyVariant.BODY_2]: css`
    font-size: 14px;
    line-height: 1.43;
    font-weight: 500;
  `,
  [TypographyVariant.BODY_3]: css`
    font-size: 14px;
    line-height: 1.43;
    font-weight: 400;
  `,
  [TypographyVariant.BODY_4]: css`
    font-size: 14px;
    line-height: 1.14;
    font-weight: 500;
  `,
  [TypographyVariant.BODY_5]: css`
    font-size: 12px;
    line-height: 1.42;
    font-weight: 400;
  `,
};

const StyledTypography = styled.div<TypographyProps>(({ variant }) => {
  return css`
    ${TypographyVariantToCSS[variant]}

    color: ${Color.WHITE_98};
  `;
});

export { StyledTypography as Typography };
