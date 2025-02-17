import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Input } from '~/shared/ui/atoms/Input';
import { separatorLineCss } from '~/shared/ui/css/separatorCss';
import { MessageItem } from '~/shared/ui/molecules/MessageItem';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { OpinionPost } from './OpinionPost';
import { OpinionData } from './opinionTypes';

type OpinionWidgetProps = {
  widgetTitle: string;
  data: OpinionData;
  className?: string;
};

function OpinionWidget({
  className,
  data,
  widgetTitle,
}: OpinionWidgetProps): JSX.Element {
  return (
    <StyledOpinionWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={
          <IconButton size="small" variant="filled" color="transparent">
            <Icon name="icon-maximize" />
          </IconButton>
        }
      />

      <StyledContentWrapper>
        <StyledOpinionPost {...data} />

        <StyledChatWrapper>
          <StyledMessageList>
            {data.comments.map((chatItem) => (
              <MessageItem key={chatItem.id} {...chatItem}></MessageItem>
            ))}
          </StyledMessageList>

          <Input
            placeholder="Write comment..."
            rightIcon={<Icon name="icon-send" />}
          />
        </StyledChatWrapper>
      </StyledContentWrapper>
    </StyledOpinionWidgetWrapper>
  );
}

export { OpinionWidget };

const StyledOpinionWidgetWrapper = styled.div``;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledOpinionPost = styled(OpinionPost)`
  padding-bottom: 12px;
  ${separatorLineCss}
`;

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
