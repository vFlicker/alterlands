import styled from '@emotion/styled';
import { JSX } from 'react';

import { PhotosWidget } from '~/widgets/common/photos';
import { PostsWidget } from '~/widgets/common/posts';
import { VideosGridWidget } from '~/widgets/common/videos';
import { ProductsWidget } from '~/widgets/user/products';

import { newsSectionData } from './newsSectionData';

function NewsSection(): JSX.Element {
  return (
    <StyledNewsSectionWrapper>
      <VideosGridWidget {...newsSectionData.videos} />
      <StyledColsWrapper>
        <StyledCol>
          <PostsWidget {...newsSectionData.posts} />
        </StyledCol>
        <StyledCol>
          <ProductsWidget {...newsSectionData.products} />
          <PhotosWidget {...newsSectionData.backstagePhoto} />
        </StyledCol>
      </StyledColsWrapper>
    </StyledNewsSectionWrapper>
  );
}

export { NewsSection };

const StyledNewsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StyledColsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
