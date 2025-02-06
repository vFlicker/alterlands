import styled from '@emotion/styled';
import { JSX } from 'react';

import { Radius } from '~/shared/theme/radiuses';
import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

type PostWidgetProps = {
  date: string;
  views: string;
  fullName: string;
  text: string[];
  image: string;
  avatar: string;
  likes: string;
  messages: string;
  reposts: string;
};

function PostWidget({
  date,
  views,
  fullName,
  avatar,
  image,
  text,
  likes,
  messages,
  reposts,
}: PostWidgetProps): JSX.Element {
  return (
    <StyledWrapper>
      <StyledWidgetHeader
        date={date}
        fullName={fullName}
        views={views}
        avatar={avatar}
        orientation="horizontal"
      />
      {text.map((row) => (
        <StyledText key={row}>{row}</StyledText>
      ))}
      <StyledImage src={image} alt="Image description" />
      <Reactions likes={likes} messages={messages} reposts={reposts} />
    </StyledWrapper>
  );
}

export { PostWidget };

const StyledWidgetHeader = styled(WidgetHeader)`
  margin-bottom: 8px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 488px;
  padding: 8px 0;
`;

const StyledText = withAttrs(
  { variant: 'body-3' },
  styled(Typography)`
    margin-bottom: 10px;
  `,
);

const StyledImage = styled.img`
  margin-bottom: 10px;
  border-radius: ${Radius.RADIUS_4};
`;
