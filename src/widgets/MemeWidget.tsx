import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Radius } from '~/shared/theme/radiuses';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

type MemeWidgetProps = {
  date: string;
  views: string;
  fullName: string;
  image: string;
  avatar: string;
  likesCount: string;
  messagesCount: string;
  reposts: string;
  size: `${MemeWidgetSize}`;
  className?: string;
};

const enum MemeWidgetSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

function MemeWidget({
  avatar,
  date,
  fullName,
  image,
  likesCount,
  messagesCount,
  reposts,
  size,
  views,
  className,
}: MemeWidgetProps): JSX.Element {
  const headerOrientation = size === 'large' ? 'horizontal' : 'vertical';

  return (
    <StyledWrapper className={className} size={size}>
      <StyledWidgetHeader
        avatar={avatar}
        date={date}
        fullName={fullName}
        views={views}
        orientation={headerOrientation}
      />
      <StyledImage src={image} alt="Image description" />
      <Reactions
        likesCount={likesCount}
        commentCount={messagesCount}
        sharesCount={reposts}
        filled
      />
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
    max-width: 234px;

    ${StyledImage} {
      height: 354px;
      object-fit: cover;
    }
  `,
  [MemeWidgetSize.SMALL]: css`
    max-width: 234px;
  `,
};

const StyledWrapper = styled.div<Pick<MemeWidgetProps, 'size'>>`
  width: 100%;
  padding: 8px 0;
  ${({ size }) => MemeWidgetSizeToCss[size]}
`;

const StyledWidgetHeader = styled(WidgetHeader)`
  margin-bottom: 8px;
`;
