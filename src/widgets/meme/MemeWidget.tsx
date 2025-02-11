import styled from '@emotion/styled';
import { JSX } from 'react';

import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Meme } from './Meme';
import { MemeData } from './memeTypes';

type MemeWidgetProps = {
  widgetTitle: string;
  data: MemeData[];
  className?: string;
};

function MemeWidget({
  className,
  data,
  widgetTitle,
}: MemeWidgetProps): JSX.Element {
  return (
    <StyledMemeWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledList>
        {data.map((meme) => (
          <Meme key={meme.id} {...meme} />
        ))}
      </StyledList>
    </StyledMemeWidgetWrapper>
  );
}

export { MemeWidget };

const StyledMemeWidgetWrapper = styled.div``;

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
