import styled from '@emotion/styled';
import { JSX } from 'react';

import { Radius } from '~/shared/theme/radiuses';
import { Reactions } from '~/shared/ui/molecules/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';

import { CardCommentData } from './cardCommentTypes';

type CardCommentProps = CardCommentData & {
  className?: string;
};

function CardComment({
  className,
  avatar,
  comment,
  date,
  fullName,
  image,
  likesCount,
  messagesCount,
  reposts,
  viewCount,
}: CardCommentProps): JSX.Element {
  return (
    <StyledCardCommentWrapper className={className}>
      <StyledUserMeta
        avatar={avatar}
        date={date}
        fullName={fullName}
        viewCount={viewCount}
        orientation="vertical"
      />
      <StyledImage src={image} alt="Image description" />
      <p>{comment}</p>
      <Reactions
        likesCount={likesCount}
        commentCount={messagesCount}
        sharesCount={reposts}
        filled
      />
    </StyledCardCommentWrapper>
  );
}

export { CardComment };

const StyledCardCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledImage = styled.img`
  margin-bottom: 8px;
  border-radius: ${Radius.RADIUS_4};
`;

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 8px;
`;
