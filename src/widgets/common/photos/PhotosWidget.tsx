import styled from '@emotion/styled';
import { JSX } from 'react';

import { Radius } from '~/shared/theme/radiuses';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

import { PhotoData } from './photoTypes';

type PhotosWidgetProps = {
  widgetTitle: string;
  data: PhotoData[];
  className?: string;
};

function PhotosWidget({
  className,
  widgetTitle,
  data,
}: PhotosWidgetProps): JSX.Element {
  return (
    <StyledPhotosWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />
      <StyledPhotoList>
        {data.map(({ id, imageUrl }) => (
          <StyledPhoto key={id} src={imageUrl} />
        ))}
      </StyledPhotoList>

      <SeeMoreButton>See more</SeeMoreButton>
    </StyledPhotosWidgetWrapper>
  );
}

export { PhotosWidget };

const StyledPhotosWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledPhotoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledPhoto = styled.img`
  border-radius: ${Radius.RADIUS_4};
`;

const SeeMoreButton = withAttrs(
  { color: 'white' },
  styled(LabelButton)`
    display: flex;
    margin: 16px auto 0 auto;
  `,
);
