import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { News } from './News';
import { NewsData } from './newsTypes';

type NewsWidgetProps = {
  widgetTitle: string;
  data: NewsData[];
  className?: string;
};

function NewsWidget({
  className,
  data,
  widgetTitle,
}: NewsWidgetProps): JSX.Element {
  return (
    <StyledNewsWidgetWrapper className={className}>
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
    </StyledNewsWidgetWrapper>
  );
}

export { NewsWidget };

const StyledNewsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledNewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledNews = styled(News)`
  &:not(:last-child) {
    ${separatorLineCss(8)}
  }
`;
