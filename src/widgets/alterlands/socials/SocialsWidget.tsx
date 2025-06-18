import styled from '@emotion/styled';
import { JSX } from 'react';

import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Social } from './Social';
import { SocialData } from './socialTypes';

type SocialsWidgetProps = {
  widgetTitle: string;
  data: SocialData[];
  className?: string;
};

function SocialsWidget({
  className,
  data,
  widgetTitle,
}: SocialsWidgetProps): JSX.Element {
  return (
    <StyledSocialsWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />
      <StyledSocialList>
        {data.map((social) => (
          <Social key={social.id} {...social} />
        ))}
      </StyledSocialList>
    </StyledSocialsWidgetWrapper>
  );
}

export { SocialsWidget };

const StyledSocialsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledSocialList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;
