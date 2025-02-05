import styled from '@emotion/styled';
import { JSX } from 'react';

import { MemeWidget } from '~/widgets/MemeWidget';
import { NewsWidget } from '~/widgets/NewsWidget';
import { PostWidget } from '~/widgets/PostWidget';
import { VideoWidget } from '~/widgets/VideoWidget';

function Formula1Page(): JSX.Element {
  return (
    <StyledWrapper>
      <PostWidget />
      <div>Opinion post widget</div>
      <div>Chat widget</div>

      <div>Merch widget</div>
      <div>Discussion widget</div>
      <NewsWidget />

      <StyledMemeWrapper>
        <MemeWidget size="large" />
        <MemeWidget size="medium" />
        <MemeWidget size="small" />
      </StyledMemeWrapper>
      <div>Post widget</div>
      <VideoWidget />
    </StyledWrapper>
  );
}

export { Formula1Page };

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;

const StyledMemeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
