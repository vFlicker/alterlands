import styled from '@emotion/styled';
import { JSX } from 'react';

import { PhotosWidget } from '~/widgets/common/photos/PhotosWidget';
import { PrivatePhotosWidget } from '~/widgets/common/photos/PrivatePhotosWidget';
import { PostsWidget } from '~/widgets/common/posts';
import { VideosGridWidget } from '~/widgets/common/videos';
import { ProductsWidget } from '~/widgets/user/products';

import { mrBeastPageData } from './mrBeastPageData';

function YoutubeSection(): JSX.Element {
  return (
    <StyledYoutubeSectionWrapper>
      <VideosGridWidget {...mrBeastPageData.youtubeSection.videos} />
      <StyledColsWrapper>
        <StyledCol>
          <PostsWidget {...mrBeastPageData.youtubeSection.posts} />
          <PrivatePhotosWidget
            {...mrBeastPageData.youtubeSection.privateBackstagePhoto}
          />
        </StyledCol>
        <StyledCol>
          <ProductsWidget {...mrBeastPageData.youtubeSection.products} />
          <PhotosWidget {...mrBeastPageData.youtubeSection.backstagePhoto} />
        </StyledCol>
      </StyledColsWrapper>
    </StyledYoutubeSectionWrapper>
  );
}

export { YoutubeSection };

const StyledYoutubeSectionWrapper = styled.div`
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
