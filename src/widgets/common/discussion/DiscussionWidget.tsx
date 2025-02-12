import styled from '@emotion/styled';
import { JSX } from 'react';

import { separatorCss } from '~/shared/ui/css/separatorCss';
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

const StyledDiscussionWidgetWrapper = styled.div``;

const StyledDiscussionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledDiscussion = styled(Discussion)`
  ${separatorCss}
`;
