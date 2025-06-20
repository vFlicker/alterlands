import styled from '@emotion/styled';
import { Fragment, JSX } from 'react';

import { avatarImage } from '~/shared/assets/images/avatars';
import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { BlockElement } from '~/shared/ui/atoms/BlockElement';
import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { Reactions } from '~/shared/ui/molecules/Reactions';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

import { patchNotesPageData } from './patchNotesPageData';

function PatchNotesPage(): JSX.Element {
  return (
    <StyledPatchNotesPageContainer>
      <StyledBreadcrumbs>
        <span>Alterlands</span>
        <span>Patch Notes</span>
      </StyledBreadcrumbs>
      <StyledContentWrapper>
        <StyledUserMeta
          fullName="Alterlands"
          avatar={avatarImage.alterlandAvatar}
          orientation="horizontal"
          date="5h"
          viewCount="3k"
        />
        <StyledContent>
          <StyledContentLeft>
            <StyledTitle>New update | Version 1.2.0</StyledTitle>
            <StyledReactions
              likesCount="765"
              commentCount="865"
              sharesCount="89"
              filled
            />
            {patchNotesPageData.blocks.map((block) => {
              return (
                <StyledBlock>
                  {block.map(({ title, image, paragraph, list }, index) => {
                    return (
                      <Fragment key={index}>
                        {title && (
                          <BlockElement.Title>{title}</BlockElement.Title>
                        )}
                        {paragraph && (
                          <BlockElement.Paragraph>
                            {paragraph}
                          </BlockElement.Paragraph>
                        )}
                        {list && <BlockElement.List items={list} />}
                        {image && <BlockElement.Image src={image} />}
                      </Fragment>
                    );
                  })}
                </StyledBlock>
              );
            })}
          </StyledContentLeft>
          <StyledContentRight>
            <StyledSidebar>
              <StyledAsideTitle>You also can read</StyledAsideTitle>
              <StyledAsideList>
                {patchNotesPageData.news.map(({ date, title, views }) => (
                  <StyledAsideItem key={title}>
                    <StyledAsideUserMeta
                      fullName="Alterlands"
                      avatar={avatarImage.alterlandAvatar}
                      orientation="horizontal"
                      date={date}
                      viewCount={views}
                    />
                    <StyledAsideItemTitle>{title}</StyledAsideItemTitle>
                  </StyledAsideItem>
                ))}
              </StyledAsideList>
            </StyledSidebar>
          </StyledContentRight>
        </StyledContent>
      </StyledContentWrapper>
    </StyledPatchNotesPageContainer>
  );
}

export { PatchNotesPage };

const StyledPatchNotesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  width: 100%;
  max-width: 952px;
  margin: 0 auto;
`;

const StyledBreadcrumbs = withAttrs(
  { variant: 'body-5', $color: Color.WHITE_64 },
  styled(Typography)`
    display: flex;
    align-self: flex-start;
    gap: 10px;

    & span:not(:last-child)::after {
      content: '/';
      margin-left: 10px;
      color: ${Color.WHITE_64};
    }
  `,
);

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 24px;
  border-radius: ${Radius.RADIUS_16};

  background-color: ${Color.DARK};
`;

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 40px;
`;

const StyledContent = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledContentLeft = styled.div``;

const StyledContentRight = styled.div``;

const StyledTitle = withAttrs(
  { variant: 'heading-2' },
  styled(Typography)`
    margin-bottom: 12px;
  `,
);

const StyledReactions = styled(Reactions)`
  margin-bottom: 40px;
`;

const StyledBlock = styled.div`
  margin-bottom: 40px;
`;

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  padding: 24px;

  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_8};
`;

const StyledAsideTitle = withAttrs(
  { variant: 'body-1', $color: Color.WHITE_64 },
  styled(Typography)`
    margin-bottom: 16px;
  `,
);

const StyledAsideUserMeta = styled(UserMeta)`
  margin-bottom: 12px;
`;

const StyledAsideList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledAsideItem = styled.div`
  &:not(:last-child) {
    ${separatorLineCss(16, Color.WHITE_16)}
  }
`;

const StyledAsideItemTitle = withAttrs(
  { variant: 'heading-5', $color: Color.WHITE_87 },
  Typography,
);
