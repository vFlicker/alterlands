import styled from '@emotion/styled';
import { JSX } from 'react';

import { mrBeastImage } from '~/shared/assets/images/user/mrBeast';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

type GalleryProps = {
  className?: string;
};

function Gallery({ className }: GalleryProps): JSX.Element {
  return (
    <StyledGalleryWrapper className={className}>
      <WidgetHeader title="Gallery" />

      <StyledWrapper>
        <StyledRow3>
          <StyledImage src={mrBeastImage.gallery.item1} />
          <StyledImage src={mrBeastImage.gallery.item2} />
          <StyledImage src={mrBeastImage.gallery.item3} />
        </StyledRow3>
        <StyledRow1>
          <StyledImage src={mrBeastImage.gallery.item4} />
        </StyledRow1>
        <StyledRow3>
          <StyledImage src={mrBeastImage.gallery.item5} />
          <StyledImage src={mrBeastImage.gallery.item6} />
          <StyledImage src={mrBeastImage.gallery.item7} />
        </StyledRow3>
        <StyledRow2>
          <StyledImage src={mrBeastImage.gallery.item8} />
          <StyledImage src={mrBeastImage.gallery.item9} />
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
  gap: 8px;
`;

const StyledRow = styled.div`
  display: grid;
  gap: 8px;
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
