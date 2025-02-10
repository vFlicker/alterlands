import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

import { MessageItem } from './ChatWidget';

type DiscussionWidgetProps = {
  className?: string;
  id: number;
  avatar: string;
  fullName: string;
  date: string;
  views: string;
  title: string;
  likes: string;
  messagesCount: string;
  reposts: string;
  answers: {
    id: number;
    avatar: string;
    fullName: string;
    date: string;
    views: string;
    message: string;
    likes: string;
    reposts: string;
    label: string;
  }[];
};

function DiscussionWidget({
  className,
  avatar,
  date,
  fullName,
  views,
  id,
  likes,
  reposts,
  title,
  answers,
}: DiscussionWidgetProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledList>
        <div>
          <StyledItem key={id}>
            <WidgetHeader
              avatar={avatar}
              date={date}
              fullName={fullName}
              views={views}
              orientation="horizontal"
            />
            <StyledTitle>{title}</StyledTitle>
            <Reactions likes={likes} reposts={reposts} />
          </StyledItem>

          <StyledMessagesWrapper>
            {answers.map((answer) => (
              <StyledMessageItem key={answer.id} {...answer} />
            ))}
          </StyledMessagesWrapper>
        </div>
      </StyledList>
    </StyledWrapper>
  );
}

export { DiscussionWidget };

const StyledTitle = withAttrs({ variant: 'heading-5' }, Typography);

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const StyledMessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledMessageItem = styled(MessageItem)`
  margin-left: 24px;
`;
