import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { Input } from '~/shared/ui/atoms/Input';
import { MessageItem } from '~/shared/ui/molecules/MessageItem';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { ChatData } from './chatTypes';

type ChatWidgetProps = {
  widgetTitle: string;
  data: ChatData[];
  className?: string;
};

function ChatWidget({
  className,
  data,
  widgetTitle,
}: ChatWidgetProps): JSX.Element {
  return (
    <StyledChatWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledChatWrapper>
        <StyledMessageList>
          {data.map((chatItem) => (
            <MessageItem key={chatItem.id} {...chatItem}></MessageItem>
          ))}
        </StyledMessageList>

        <Input
          placeholder="Write comment..."
          rightIcon={<Icon name="icon-send" />}
        />
      </StyledChatWrapper>
    </StyledChatWidgetWrapper>
  );
}

export { ChatWidget };

const StyledChatWidgetWrapper = styled.div``;

const StyledChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledMessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
