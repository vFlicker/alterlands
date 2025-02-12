import styled from '@emotion/styled';
import { JSX } from 'react';

import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Meme } from './Meme';
import { MemeData } from './memesTypes';

type MemesWidgetProps = {
  widgetTitle: string;
  data: MemeData[];
  className?: string;
};

function MemesWidget({
  className,
  data,
  widgetTitle,
}: MemesWidgetProps): JSX.Element {
  return (
    <StyledMemesWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledMemeList>
        {data.map((meme) => (
          <Meme key={meme.id} {...meme} />
        ))}
      </StyledMemeList>
    </StyledMemesWidgetWrapper>
  );
}

export { MemesWidget };

const StyledMemesWidgetWrapper = styled.div``;

const StyledMemeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
