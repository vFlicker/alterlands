import styled from '@emotion/styled';
import { Fragment, JSX } from 'react';

import { vacancyImage } from '~/shared/assets/images/alterlands/vacancy';
import { avatarImage } from '~/shared/assets/images/avatars';
import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { BlockElement } from '~/shared/ui/atoms/BlockElement';
import { Button } from '~/shared/ui/atoms/Button';
import { Typography } from '~/shared/ui/atoms/Typography';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';
import { AttributeList } from '~/widgets/community/vacancy';

import { vacancyPageData } from './vacancyPageData';

function VacancyPage(): JSX.Element {
  return (
    <StyledVacancyPageContainer>
      <StyledBreadcrumbs>Alterlands / UI/UX Designer Vacancy</StyledBreadcrumbs>
      <StyledContentWrapper>
        <StyledUserMeta
          fullName="Alterlands"
          avatar={avatarImage.alterlandAvatar}
          orientation="horizontal"
          date="12h"
          viewCount="521"
        />
        <StyledContent>
          <StyledContentLeft>
            <StyledTitle>UX/UI Designer</StyledTitle>
            <StyledAttributeList attributes={vacancyPageData.jobAttributes} />
            {vacancyPageData.blocks.map((block) => {
              return (
                <StyledBlock>
                  {block.map(({ title, paragraph, list }) => {
                    return (
                      <Fragment key={title}>
                        {title && (
                          <BlockElement.Title>{title}</BlockElement.Title>
                        )}
                        {paragraph && (
                          <BlockElement.Paragraph>
                            {paragraph}
                          </BlockElement.Paragraph>
                        )}
                        {list && <BlockElement.List items={list} />}
                      </Fragment>
                    );
                  })}
                </StyledBlock>
              );
            })}
            <StyledButton size="medium" color="accent" variant="filled">
              Apply
            </StyledButton>
          </StyledContentLeft>
          <StyledContentRight>
            <StyledSidebar>
              <SidebarList>
                {vacancyPageData.sidebar.map(({ title, value, imageSrc }) => (
                  <SidebarListItem key={title}>
                    <StyledIcon src={imageSrc} />
                    <SidebarListTitle>{title}</SidebarListTitle>
                    <SidebarListValue>{value}</SidebarListValue>
                  </SidebarListItem>
                ))}
              </SidebarList>
              <Button color="accent" size="medium" variant="filled">
                Apply
              </Button>
              <StyledFooter>
                <StyledFooterText>Share a link to this job</StyledFooterText>
                <StyledFooterList>
                  {vacancyImage.social.map((icon, index) => (
                    <StyledFooterIcon key={index} src={icon} />
                  ))}
                </StyledFooterList>
              </StyledFooter>
            </StyledSidebar>
          </StyledContentRight>
        </StyledContent>
      </StyledContentWrapper>
    </StyledVacancyPageContainer>
  );
}

export { VacancyPage };

const StyledVacancyPageContainer = styled.div`
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
    align-self: flex-start;
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

const StyledAttributeList = styled(AttributeList)`
  margin-bottom: 40px;
`;

const StyledBlock = styled.div`
  margin-bottom: 40px;
`;

const StyledButton = styled(Button)`
  margin-right: auto;
`;

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 260px;
  padding: 24px;

  background-color: ${Color.WHITE_8};
`;

const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SidebarListItem = styled.div`
  position: relative;
  padding-left: 36px;
`;

const StyledIcon = styled.img`
  position: absolute;
  left: 0;
  top: 12px;
  transform: translateY(-50%);

  width: 24px;
  height: 24px;
`;

const SidebarListTitle = withAttrs({ variant: 'heading-5' }, Typography);

const SidebarListValue = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_70 },
  Typography,
);

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const StyledFooterText = withAttrs({ variant: 'body-1' }, Typography);

const StyledFooterList = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledFooterIcon = styled.img``;
