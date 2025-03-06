import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { MessageItem } from '~/shared/ui/molecules/MessageItem';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { OpinionPost } from './OpinionPost';
import { OpinionData } from './opinionTypes';
import { SideInput } from './SideInput';

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

          <SideInput candidates={data.candidates} />
        </StyledChatWrapper>
      </StyledContentWrapper>
    </StyledOpinionWidgetWrapper>
  );
}

export { OpinionWidget };

const StyledOpinionWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledOpinionPost = styled(OpinionPost)`
  padding-bottom: 16px;

  &:not(:last-child) {
    ${separatorLineCss(8)}
  }
`;

const StyledChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 8px;
`;

const StyledMessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
