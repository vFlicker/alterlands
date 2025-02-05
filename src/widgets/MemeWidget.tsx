import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { postImage } from '~/shared/assets/images';
import { Radius } from '~/shared/theme/radiuses';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

type MemeWidgetProps = {
  size: `${MemeWidgetSize}`;
  className?: string;
};

const enum MemeWidgetSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

function MemeWidget({ size, className }: MemeWidgetProps): JSX.Element {
  const headerOrientation = size === 'large' ? 'horizontal' : 'vertical';

  return (
    <StyledWrapper className={className} size={size}>
      <StyledWidgetHeader orientation={headerOrientation} />
      <StyledImage src={postImage} alt="Image description" />
      <Reactions />
    </StyledWrapper>
  );
}

export { MemeWidget };

const StyledImage = styled.img`
  margin-bottom: 10px;
  border-radius: ${Radius.RADIUS_4};
`;

const MemeWidgetSizeToCss = {
  [MemeWidgetSize.LARGE]: css`
    max-width: 100%;
  `,
  [MemeWidgetSize.MEDIUM]: css`
    max-width: 236px;

    ${StyledImage} {
      height: 354px;
      object-fit: cover;
    }
  `,
  [MemeWidgetSize.SMALL]: css`
    max-width: 236px;
  `,
};

const StyledWrapper = styled.div<MemeWidgetProps>`
  width: 100%;
  ${({ size }) => MemeWidgetSizeToCss[size]}
`;

const StyledWidgetHeader = styled(WidgetHeader)`
  margin-bottom: 8px;
`;
