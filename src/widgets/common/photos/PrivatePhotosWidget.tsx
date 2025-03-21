import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

import { PhotoData } from './photoTypes';

type PrivatePhotosWidgetProps = {
  widgetTitle: string;
  data: PhotoData[];
  className?: string;
};

function PrivatePhotosWidget({
  className,
  widgetTitle,
  data,
}: PrivatePhotosWidgetProps): JSX.Element {
  return (
    <StyledPrivatePhotosWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={
          <StyledIconButton>
            <Icon name="icon-lock" />
          </StyledIconButton>
        }
      />

      <div>
        <StyledNotificationText>
          You see this content as MrBeast has added you to the{' '}
          <span>#Friends</span> group
        </StyledNotificationText>
        <StyledPhotoList>
          {data.map(({ id, imageUrl }) => (
            <StyledPhoto key={id} src={imageUrl} />
          ))}
        </StyledPhotoList>
      </div>

      <SeeMoreButton>See more</SeeMoreButton>
    </StyledPrivatePhotosWidgetWrapper>
  );
}

export { PrivatePhotosWidget };

const StyledPrivatePhotosWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledIconButton = withAttrs(
  {
    size: 'small',
    variant: 'outlined',
    color: 'transparent',
  },
  styled(IconButton)`
    svg {
      stroke: ${Color.WHITE_64};
    }
  `,
);

const StyledNotificationText = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  styled(Typography)`
    margin-bottom: 16px;

    span {
      color: ${Color.GREEN_2};
    }
  `,
);

const StyledPhotoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
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
