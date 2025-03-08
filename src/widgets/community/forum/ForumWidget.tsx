import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
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

      <StyledNewsList>
        {data.map((news) => (
          <StyledNews key={news.id} {...news} />
        ))}
      </StyledNewsList>
    </StyledForumWidgetWrapper>
  );
}

export { ForumWidget };

const StyledForumWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledNewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledNews = styled(Forum)`
  &:not(:last-child) {
    ${separatorLineCss(16)}
  }
`;
