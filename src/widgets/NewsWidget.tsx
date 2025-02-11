import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

type NewsWidgetProps = {
  avatar: string;
  date: string;
  viewCount: string;
  fullName: string;
  title: string;
  likesCount: string;
  messagesCount: string;
  reposts: string;
};

function NewsWidget({
  avatar,
  date,
  fullName,
  likesCount,
  messagesCount,
  reposts,
  title,
  viewCount,
}: NewsWidgetProps): JSX.Element {
  return (
    <StyledNewsWidgetWrapper>
      <StyledUserMeta
        avatar={avatar}
        date={date}
        fullName={fullName}
        viewCount={viewCount}
        orientation="horizontal"
      />
      <StyledTitle>{title}</StyledTitle>
      <Reactions
        likesCount={likesCount}
        commentCount={messagesCount}
        sharesCount={reposts}
        filled
      />
    </StyledNewsWidgetWrapper>
  );
}

export { NewsWidget };

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 8px;
`;

const StyledNewsWidgetWrapper = styled.div`
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
