import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
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

      <StyledList>
        {data.map((discussion) => (
          <StyledDiscussion key={discussion.id} {...discussion} />
        ))}
      </StyledList>
    </StyledDiscussionWidgetWrapper>
  );
}

export { DiscussionWidget };

const StyledDiscussionWidgetWrapper = styled.div``;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledDiscussion = styled(Discussion)`
  &:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      width: 100%;
      height: 1px;
      background-color: ${Color.WHITE_16};
    }
  }
`;
