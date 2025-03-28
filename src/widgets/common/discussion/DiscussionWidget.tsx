import styled from '@emotion/styled';
import { JSX } from 'react';

import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Discussion } from './Discussion';
import { DiscussionData } from './discussionTypes';

type DiscussionWidgetProps = {
  widgetTitle: string;
  data: DiscussionData[];
  className?: string;
};

function DiscussionWidget({
  className,
  data,
  widgetTitle,
}: DiscussionWidgetProps): JSX.Element {
  return (
    <StyledDiscussionWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledDiscussionList>
        {data.map((discussion) => (
          <StyledDiscussion key={discussion.id} {...discussion} />
        ))}
      </StyledDiscussionList>
    </StyledDiscussionWidgetWrapper>
  );
}

export { DiscussionWidget };

const StyledDiscussionWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledDiscussionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledDiscussion = styled(Discussion)`
  &:not(:last-child) {
    ${separatorLineCss(8)}
  }
`;
