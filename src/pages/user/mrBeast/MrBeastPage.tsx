import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { Color } from '~/shared/theme/colors';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Tab } from '~/shared/ui/atoms/Tab';
import { withAttrs } from '~/shared/ui/withAttrs';
import { PersonalFileWidget } from '~/widgets/user/personalFileWidget';
import { TopBar } from '~/widgets/user/topBar';
import { Trophy } from '~/widgets/user/Trophy';

import { mrBeastPageData } from './mrBeastPageData';
import { StoreSection } from './StoreSection';
import { YoutubeSection } from './YoutubeSection';

type MenuItem =
  | 'Trophies'
  | 'General'
  | 'MrBeast YouTube'
  | 'MrBeast Store'
  | 'MrBeast Burger'
  | 'News'
  | 'Hiring';

function MrBeastPage(): JSX.Element {
  const [activeMenuItem, setActiveMenuItem] =
    useState<MenuItem>('MrBeast Store');

  return (
    <StyledUserPageContainer>
      <TopBar userRole="viewer" {...mrBeastPageData.header} />
      <StyledTopWrapper>
        <StyledFileWidgetWrapper>
          <PersonalFileWidget files={mrBeastPageData.personalFiles} />
          <StyledTrophyButton
            active={activeMenuItem === 'Trophies'}
            onClick={() => setActiveMenuItem('Trophies')}
          >
            <Icon name="icon-trophy" />
          </StyledTrophyButton>
        </StyledFileWidgetWrapper>
        <StyledMenuWrapper>
          <StyledTabsWrapper>
            {mrBeastPageData.menu.first.map((text) => (
              <Tab
                key={text}
                color="default"
                variant="underline"
                onClick={() => setActiveMenuItem(text as MenuItem)}
                selected={activeMenuItem === text}
              >
                {text}
              </Tab>
            ))}
          </StyledTabsWrapper>
        </StyledMenuWrapper>
      </StyledTopWrapper>

      {activeMenuItem === 'Trophies' && (
        <Trophy userRole="viewer" {...mrBeastPageData.trophy} />
      )}
      {activeMenuItem === 'General' && <div>General</div>}
      {activeMenuItem === 'MrBeast Burger' && <div>MrBeast Burger</div>}
      {activeMenuItem === 'MrBeast Store' && <StoreSection />}
      {activeMenuItem === 'MrBeast YouTube' && <YoutubeSection />}
      {activeMenuItem === 'News' && <div>News</div>}
      {activeMenuItem === 'Hiring' && <div>Hiring</div>}
    </StyledUserPageContainer>
  );
}

export { MrBeastPage };

const StyledUserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  width: 952px;
  margin: 0 auto;
`;

const StyledTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  width: 100%;
  padding: 0 8px;
`;

const StyledFileWidgetWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledTabsWrapper = styled.div`
  display: flex;
`;

const StyledMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledTrophyButton = withAttrs(
  { variant: 'filled', color: 'accent', size: 'medium' },
  styled(IconButton)`
    width: 38px;
    height: 38px;
    background-color: ${Color.WHITE_8};

    &:hover {
      background-color: ${Color.ACCENT_1};
    }
    ${({ active }) =>
      active &&
      `
      background-color: ${Color.ACCENT};
      &:hover {
        background-color: ${Color.ACCENT_1};
      }
    `}
  `,
);
