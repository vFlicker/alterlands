import styled from '@emotion/styled';
import { JSX } from 'react';

import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { News } from './News';
import { NewsData } from './newsTypes';

type NewsWidgetProps = {
  widgetTitle: string;
  data: NewsData[];
  className?: string;
  onClick?: () => void;
};

function NewsWidget({
  className,
  data,
  widgetTitle,
  onClick,
}: NewsWidgetProps): JSX.Element {
  return (
    <StyledNewsWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledNewsList>
        {data.map((news) => (
          <StyledNews key={news.id} {...news} onClick={onClick} />
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
