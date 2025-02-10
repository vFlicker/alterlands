import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { Input } from '~/shared/ui/atoms/Input';
import { Message } from '~/shared/ui/atoms/Message';
import { Reactions } from '~/shared/ui/molecules/Reactions';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

type ChatWidgetProps = {
  className?: string;
  data: {
    id: number;
    avatar: string;
    fullName: string;
    date: string;
    message: string;
    likes: string;
    reposts: string;
  }[];
};

function ChatWidget({ className, data }: ChatWidgetProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledList>
        {data.map(({ avatar, date, fullName, id, likes, reposts, message }) => (
          <StyledItem key={id}>
            <StyledWidgetHeader
              avatar={avatar}
              date={date}
              fullName={fullName}
              orientation="horizontal"
            />
            <StyledMessage>{message}</StyledMessage>
            <StyledReactions
              variant="not field"
              likes={likes}
              reposts={reposts}
            />
          </StyledItem>
        ))}
      </StyledList>

      <Input
        placeholder="Write comment..."
        rightIcon={<Icon name="icon-send" />}
      />
    </StyledWrapper>
  );
}

export { ChatWidget };

const StyledWrapper = styled.div`
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

const StyledWidgetHeader = styled(WidgetHeader)`
  margin-bottom: 8px;
`;

const StyledMessage = styled(Message)`
  margin: 0 0 4px 36px;
`;

const StyledReactions = styled(Reactions)`
  margin-left: 36px;
`;
