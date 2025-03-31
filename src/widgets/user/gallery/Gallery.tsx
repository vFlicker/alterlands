import styled from '@emotion/styled';
import { JSX } from 'react';

import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

type GalleryProps = {
  data: string[];
  widgetTitle: string;
  className?: string;
};

function Gallery({
  className,
  data: imageUrls,
  widgetTitle,
}: GalleryProps): JSX.Element {
  return (
    <StyledGalleryWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledWrapper>
        <StyledRow3>
          <StyledImage src={imageUrls[1]} />
          <StyledImage src={imageUrls[2]} />
          <StyledImage src={imageUrls[3]} />
        </StyledRow3>
        <StyledRow1>
          <StyledImage src={imageUrls[4]} />
        </StyledRow1>
        <StyledRow3>
          <StyledImage src={imageUrls[5]} />
          <StyledImage src={imageUrls[6]} />
          <StyledImage src={imageUrls[7]} />
        </StyledRow3>
        <StyledRow2>
          <StyledImage src={imageUrls[8]} />
          <StyledImage src={imageUrls[9]} />
        </StyledRow2>
      </StyledWrapper>
    </StyledGalleryWrapper>
  );
}

export { Gallery };

const StyledGalleryWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledRow = styled.div`
  display: grid;
  gap: 16px;
`;

const StyledRow1 = styled(StyledRow)`
  grid-template-columns: repeat(1, 1fr);
`;

const StyledRow2 = styled(StyledRow)`
  grid-template-columns: repeat(2, 1fr);
`;

const StyledRow3 = styled(StyledRow)`
  grid-template-columns: repeat(3, 1fr);
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
