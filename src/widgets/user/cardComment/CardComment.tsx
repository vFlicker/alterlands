import styled from '@emotion/styled';
import { JSX } from 'react';

import { Radius } from '~/shared/theme/radiuses';
import { TypographyVariantToCss } from '~/shared/ui/atoms/Typography';
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
  verified,
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
        verified={verified}
        orientation="vertical"
      />
      <StyledImageWrapper>
        <StyledImage src={image} alt="Image description" />
        {comment && <StyledComment>{comment}</StyledComment>}
      </StyledImageWrapper>
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
`;

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 10px;
`;

const StyledComment = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: none;
  padding: 16px 12px 8px;
  border-radius: ${Radius.RADIUS_8} ${Radius.RADIUS_8} 0 0;

  ${TypographyVariantToCss['body-3']}

  background-color: rgba(13, 13, 13, 0.722);
`;

const StyledImageWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 300px;
  margin-bottom: 8px;
  border-radius: ${Radius.RADIUS_4};

  cursor: pointer;

  &:hover ${StyledComment} {
    display: block;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 360px;

  border-radius: ${Radius.RADIUS_4};

  object-fit: cover;
`;
