import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Radius } from '~/shared/theme/radiuses';
import { Reactions } from '~/shared/ui/molecules/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';

import { MemeData, MemeSize } from './memeTypes';

type MemeProps = MemeData & {
  className?: string;
};

function Meme({
  className,
  avatar,
  date,
  fullName,
  image,
  likesCount,
  messagesCount,
  reposts,
  size,
  viewCount,
}: MemeProps): JSX.Element {
  const headerOrientation = size === 'large' ? 'horizontal' : 'vertical';

  return (
    <StyledMemeWrapper className={className} size={size}>
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
    </StyledMemeWrapper>
  );
}

export { Meme };

const StyledImage = styled.img`
  margin-bottom: 10px;
  border-radius: ${Radius.RADIUS_4};
`;

const MemeSizeToCss = {
  [MemeSize.LARGE]: css`
    max-width: 100%;
  `,
  [MemeSize.MEDIUM]: css`
    max-width: 234px;

    ${StyledImage} {
      height: 354px;
      object-fit: cover;
    }
  `,
  [MemeSize.SMALL]: css`
    max-width: 234px;
  `,
};

const StyledMemeWrapper = styled.div<Pick<MemeProps, 'size'>>`
  width: 100%;
  padding: 8px 0;
  ${({ size }) => MemeSizeToCss[size]}
`;

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 8px;
`;
