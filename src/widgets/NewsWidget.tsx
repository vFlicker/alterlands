import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

type NewsWidgetProps = {
  avatar: string;
  date: string;
  views: string;
  fullName: string;
  title: string;
  likes: string;
  messagesCount: string;
  reposts: string;
};

function NewsWidget({
  avatar,
  date,
  fullName,
  likes,
  messagesCount,
  reposts,
  title,
  views,
}: NewsWidgetProps): JSX.Element {
  return (
    <StyledWrapper>
      <StyledWidgetHeader
        avatar={avatar}
        date={date}
        fullName={fullName}
        views={views}
        orientation="horizontal"
      />
      <StyledTitle>{title}</StyledTitle>
      <Reactions likes={likes} commentCount={messagesCount} reposts={reposts} />
    </StyledWrapper>
  );
}

export { NewsWidget };

const StyledWidgetHeader = styled(WidgetHeader)`
  margin-bottom: 8px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 488px;
  padding: 8px 0;
`;

const StyledTitle = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    margin-bottom: 10px;
  `,
);
