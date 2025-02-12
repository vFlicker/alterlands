import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
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
      <WidgetHeader title={widgetTitle} />

      <StyledList>
        {data.map((news) => (
          <StyledNews key={news.id} {...news} />
        ))}
      </StyledList>
    </StyledNewsWidgetWrapper>
  );
}

export { NewsWidget };

const StyledNewsWidgetWrapper = styled.div``;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledNews = styled(News)`
  // TODO: use helper
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
