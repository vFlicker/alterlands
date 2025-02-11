import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { Reactions } from '~/shared/ui/molecules/Reactions/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

type NewsWidgetProps = {
  avatar: string;
  date: string;
  views: string;
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
  views,
}: NewsWidgetProps): JSX.Element {
  return (
    <StyledWrapper>
      <StyledUserMeta
        avatar={avatar}
        date={date}
        fullName={fullName}
        views={views}
        orientation="horizontal"
      />
      <StyledTitle>{title}</StyledTitle>
      <Reactions
        likesCount={likesCount}
        commentCount={messagesCount}
        sharesCount={reposts}
        filled
      />
    </StyledWrapper>
  );
}

export { NewsWidget };

const StyledUserMeta = styled(UserMeta)`
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
