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

      <StyledBannerWrapper>
        <StyledImage src={data.imageSrc} />
        <StyledBannerText>Welcome to the world of Design</StyledBannerText>
      </StyledBannerWrapper>
    </StyledBannerWidgetWrapper>
  );
}

export { BannerWidget };

const StyledBannerWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledBannerWrapper = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  height: 320px;
  border-radius: ${Radius.RADIUS_8};
`;

const StyledBannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-30%, -50%);

  font-weight: 700;
  font-size: 42px;
  text-align: center;

  @media (max-width: 1280px) {
    left: 30%;
    transform: translate(-20%, -50%);
  }
`;
