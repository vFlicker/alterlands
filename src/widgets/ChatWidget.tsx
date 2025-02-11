import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { Input } from '~/shared/ui/atoms/Input';
import { Message } from '~/shared/ui/atoms/Message';
import { Reactions } from '~/shared/ui/molecules/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';

type ChatWidgetProps = {
  className?: string;
  data: {
    id: number;
    avatar: string;
    fullName: string;
    date: string;
    message: string;
    likesCount: string;
    reposts: string;
  }[];
};

function ChatWidget({ className, data }: ChatWidgetProps): JSX.Element {
  return (
    <StyledChatWidgetWrapper className={className}>
      <StyledList>
        {data.map((itemData) => (
          <MessageItem key={itemData.id} {...itemData}></MessageItem>
        ))}
      </StyledList>

      <Input
        placeholder="Write comment..."
        rightIcon={<Icon name="icon-send" />}
      />
    </StyledChatWidgetWrapper>
  );
}

type MessageItemProps = {
  id: number;
  avatar: string;
  fullName: string;
  date: string;
  message: string;
  likesCount: string;
  reposts: string;
  className?: string;
};

// TODO: move to separate file
function MessageItem({
  className,
  avatar,
  date,
  fullName,
  id,
  likesCount,
  message,
  reposts,
}: MessageItemProps): JSX.Element {
  return (
    <StyledItem className={className} key={id}>
      <StyledUserMeta
        avatar={avatar}
        date={date}
        fullName={fullName}
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

export { ChatWidget, MessageItem };

const StyledChatWidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledItem = styled.div``;

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 8px;
`;

const StyledMessage = styled(Message)`
  margin: 0 0 4px 36px;
`;

const StyledReactions = styled(Reactions)`
  margin-left: 36px;
`;
