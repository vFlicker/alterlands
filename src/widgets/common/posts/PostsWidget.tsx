import styled from '@emotion/styled';
import { JSX } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Post } from './Post';
import { PostData } from './postsTypes';

type PostsWidgetProps = {
  widgetTitle: string;
  data: PostData[];
  className?: string;
};

function PostsWidget({
  className,
  widgetTitle,
  data,
}: PostsWidgetProps): JSX.Element {
  return (
    <StyledPostsWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={<LabelButton color="white">More</LabelButton>}
      />
      <StyledPostList>
        {data.map((post) => (
          <StyledPost key={post.id} {...post} />
        ))}
      </StyledPostList>
    </StyledPostsWidgetWrapper>
  );
}

export { PostsWidget };

const StyledPostsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledPostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const StyledPost = styled(Post)`
  &:not(:last-child) {
    ${separatorLineCss(8)}
  }
`;
