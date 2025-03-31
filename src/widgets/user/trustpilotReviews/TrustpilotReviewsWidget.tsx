import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { ColorfulRating } from '~/shared/ui/atoms/ColorfulRating';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

type TrustpilotReviewsWidgetProps = {
  widgetTitle: string;
  rating: 1 | 2 | 3 | 4 | 5;
  className?: string;
};

function TrustpilotReviewsWidget({
  className,
  rating,
  widgetTitle,
}: TrustpilotReviewsWidgetProps): JSX.Element {
  return (
    <StyledTrustpilotReviewsWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={
          <StyledIconButton>
            <Icon name="icon-redirect" />
          </StyledIconButton>
        }
      />

      <StyledTrustpilotReviewsWrapper>
        <ColorfulRating value={rating} />
        <StyledText>
          Trustpilot: <span>Average | {rating}</span> reviews
        </StyledText>
      </StyledTrustpilotReviewsWrapper>
    </StyledTrustpilotReviewsWidgetWrapper>
  );
}

export { TrustpilotReviewsWidget };

const StyledTrustpilotReviewsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledTrustpilotReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
`;

const StyledText = withAttrs(
  { variant: 'body-3' },
  styled(Typography)`
    & span {
      font-weight: 700;
    }
  `,
);

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

    &:hover {
      svg {
        stroke: ${Color.WHITE_98};
      }
    }
  `,
);
