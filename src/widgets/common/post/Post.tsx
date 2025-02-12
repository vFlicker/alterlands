import styled from '@emotion/styled';
import { JSX } from 'react';

import { Radius } from '~/shared/theme/radiuses';
import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

import { PostData } from './postType';

type PostProps = PostData & {
  className?: string;
};

function Post({
  className,
  date,
  viewCount,
  fullName,
  avatar,
  image,
  text,
  likesCount,
  messagesCount,
  reposts,
}: PostProps): JSX.Element {
  return (
    <StyledPostWrapper className={className}>
      <StyledUserMeta
        date={date}
        fullName={fullName}
        viewCount={viewCount}
        avatar={avatar}
        orientation="horizontal"
      />
      {text.map((row) => (
        <StyledText key={row}>{row}</StyledText>
      ))}
      <StyledImage src={image} alt="Image description" />
      <Reactions
        likesCount={likesCount}
        commentCount={messagesCount}
        sharesCount={reposts}
        filled
      />
    </StyledPostWrapper>
  );
}

export { Post };

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 8px;
`;

const StyledPostWrapper = styled.div`
  width: 100%;
  max-width: 488px;
  padding: 8px 0;
`;

const StyledText = withAttrs(
  { variant: 'body-3' },
  styled(Typography)`
    margin-bottom: 10px;
  `,
);

const StyledImage = styled.img`
  margin-bottom: 10px;
  border-radius: ${Radius.RADIUS_4};
`;
