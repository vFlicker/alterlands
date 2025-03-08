import styled from '@emotion/styled';
import { JSX } from 'react';

import { Radius } from '~/shared/theme/radiuses';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { BannerData } from './bannerTypes';

type BannerWidgetProps = {
  widgetTitle: string;
  data: BannerData;
  className?: string;
};

function BannerWidget({
  className,
  data,
  widgetTitle,
}: BannerWidgetProps): JSX.Element {
  return (
    <StyledBannerWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={<LabelButton color="white">Read more</LabelButton>}
      />
      <StyledImage src={data.imageSrc} />
    </StyledBannerWidgetWrapper>
  );
}

export { BannerWidget };

const StyledBannerWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledImage = styled.img`
  border-radius: ${Radius.RADIUS_8};
`;
