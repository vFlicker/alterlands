import styled from '@emotion/styled';
import { JSX } from 'react';

import { PhotosWidget, PrivatePhotosWidget } from '~/widgets/common/photos';
import { PostsWidget } from '~/widgets/common/posts';
import { VideosGridWidget } from '~/widgets/common/videos';
import { FilesWidget } from '~/widgets/user/files';
import { MemoryWidget } from '~/widgets/user/memory';
import { ProductsWidget } from '~/widgets/user/products';

import { youtubeSectionData } from './youtubeSectionData';

function YoutubeSection(): JSX.Element {
  return (
    <StyledYoutubeSectionWrapper>
      <VideosGridWidget {...youtubeSectionData.videos} />
      <StyledColsWrapper>
        <StyledCol>
          <PostsWidget {...youtubeSectionData.posts} />
          <PrivatePhotosWidget {...youtubeSectionData.privateBackstagePhoto} />
        </StyledCol>
        <StyledCol>
          <ProductsWidget {...youtubeSectionData.products} />
          <MemoryWidget />
          <PhotosWidget {...youtubeSectionData.backstagePhoto} />
          <FilesWidget />
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
