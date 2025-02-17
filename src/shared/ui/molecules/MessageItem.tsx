import styled from '@emotion/styled';
import { JSX } from 'react';

import { Message } from '~/shared/ui/atoms/Message';
import { Reactions } from '~/shared/ui/molecules/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';

import { ChipColor } from '../atoms/Chip';

type MessageItemProps = {
  id: number;
  avatar: string;
  fullName: string;
  date: string;
  message: string;
  likesCount: string;
  reposts: string;
  label?: {
    text: string;
    color: `${ChipColor}`;
  };
  viewCount?: string;
  verified?: boolean;
  className?: string;
};

function MessageItem({
  className,
  avatar,
  date,
  fullName,
  verified,
  viewCount,
  id,
  label,
  likesCount,
  message,
  reposts,
}: MessageItemProps): JSX.Element {
  return (
    <StyledItem className={className} key={id}>
      <StyledUserMeta
        avatar={avatar}
        date={date}
        verified={verified}
        viewCount={viewCount}
        fullName={fullName}
        label={label}
        orientation="horizontal"
      />
      <StyledMessage>{message}</StyledMessage>
      <StyledReactions
        likesCount={likesCount}
        sharesCount={reposts}
        filled={false}
      />
    </StyledItem>
  );
}

export { MessageItem };

const StyledItem = styled.div``;

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 8px;
`;

const StyledMessage = styled(Message)`
  margin: 0 0 2px 36px;
`;

const StyledReactions = styled(Reactions)`
  margin-left: 36px;
`;
