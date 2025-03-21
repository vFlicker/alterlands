import styled from '@emotion/styled';
import { JSX } from 'react';

import { mrBeastImage } from '~/shared/assets/images/user/mrBeast';
import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

type MemoryWidgetProps = {
  className?: string;
};

function MemoryWidget({ className }: MemoryWidgetProps): JSX.Element {
  return (
    <StyledMemoryWidgetWrapper className={className}>
      <WidgetHeader title="Memory" />

      <StyledTextWrapper>
        <StyledBlock>
          <StyledTitle>My successful success</StyledTitle>
          <StyledParagraph>
            I started uploading videos about different YouTubers, expecting
            bigger views and more engagement. However, he realized that creating
            a community around his content was essential for a successful
            YouTube channel. He began targeting a younger audience’s interests,
            and this change in direction proved beneficial with his views
            gradually increasing.
          </StyledParagraph>
        </StyledBlock>

        <StyledBlock>
          <StyledTitle>Did you realize it now?</StyledTitle>
          <StyledFlexBlock>
            <StyledImage src={mrBeastImage.memory.memory1} />
            <StyledParagraph>
              MrBeast’s channel truly gained attention with a viral video he
              posted in 2017 where he counted to 100,000. The video’s concept
              was completely novel which helped propel MrBeast’s channel to new
              heights...
            </StyledParagraph>
          </StyledFlexBlock>
        </StyledBlock>
      </StyledTextWrapper>

      <ReadMoreButton>Read more</ReadMoreButton>
    </StyledMemoryWidgetWrapper>
  );
}

export { MemoryWidget };

const StyledMemoryWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledBlock = styled.div``;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledFlexBlock = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledTitle = withAttrs(
  { variant: 'heading-4' },
  styled(Typography)`
    margin-bottom: 16px;
  `,
);

const StyledParagraph = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  Typography,
);

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${Radius.RADIUS_8};
`;

const ReadMoreButton = withAttrs(
  { color: 'white' },
  styled(LabelButton)`
    display: flex;
    margin: 16px auto 0 auto;
  `,
);
