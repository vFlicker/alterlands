import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Forum } from './Forum';
import { ForumData } from './forumTypes';

type ForumWidgetProps = {
  widgetTitle: string;
  data: ForumData[];
  className?: string;
};

function ForumWidget({
  className,
  data,
  widgetTitle,
}: ForumWidgetProps): JSX.Element {
  return (
    <StyledForumWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={
          <IconButton size="small" variant="filled" color="transparent">
            <Icon name="icon-chevron-down" />
          </IconButton>
        }
      />

      <StyledForumList>
        {data.map((forum) => (
          <StyledForum key={forum.id} {...forum} />
        ))}
      </StyledForumList>
    </StyledForumWidgetWrapper>
  );
}

export { ForumWidget };

const StyledForumWidgetWrapper = styled.div`
  padding: 20px 16px;
  border: 1px solid ${Color.WHITE_16};
  border-radius: ${Radius.RADIUS_16};
  background-color: transparent;
`;

const StyledForumList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledForum = styled(Forum)`
  &:not(:last-child) {
    ${separatorLineCss(16, Color.WHITE_16)}
  }
`;
