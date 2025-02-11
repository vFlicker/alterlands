import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Post } from './Post';
import { PostData } from './postType';

type PostWidgetProps = {
  widgetTitle: string;
  data: PostData[];
  className?: string;
};

function PostWidget({
  widgetTitle,
  data,
  className,
}: PostWidgetProps): JSX.Element {
  return (
    <StyledPostWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={<LabelButton color="white">More</LabelButton>}
      />
      <StyledPostList>
        {data.map((post) => (
          <StyledPost key={post.id} {...post} />
        ))}
      </StyledPostList>
    </StyledPostWidgetWrapper>
  );
}

export { PostWidget };

const StyledPostWidgetWrapper = styled.div``;

const StyledPost = styled(Post)`
  &:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      width: 100%;
      height: 1px;
      background-color: ${Color.WHITE_16};
    }
  }
`;

const StyledPostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
