import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Radius } from '~/shared/theme/radiuses';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';

type MemeWidgetProps = {
  date: string;
  viewCount: string;
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
  viewCount,
  className,
}: MemeWidgetProps): JSX.Element {
  const headerOrientation = size === 'large' ? 'horizontal' : 'vertical';

  return (
    <StyledMemeWidgetWrapper className={className} size={size}>
      <StyledUserMeta
        avatar={avatar}
        date={date}
        fullName={fullName}
        viewCount={viewCount}
        orientation={headerOrientation}
      />
      <StyledImage src={image} alt="Image description" />
      <Reactions
        likesCount={likesCount}
        commentCount={messagesCount}
        sharesCount={reposts}
        filled
      />
    </StyledMemeWidgetWrapper>
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

const StyledMemeWidgetWrapper = styled.div<Pick<MemeWidgetProps, 'size'>>`
  width: 100%;
  padding: 8px 0;
  ${({ size }) => MemeWidgetSizeToCss[size]}
`;

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 8px;
`;
