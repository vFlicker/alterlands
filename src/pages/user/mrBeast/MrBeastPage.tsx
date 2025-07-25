import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { Tab } from '~/shared/ui/atoms/Tab';
import { TrophyButton } from '~/shared/ui/molecules/TrophyButton';
import { withAttrs } from '~/shared/ui/withAttrs';
import { PersonalFileWidget } from '~/widgets/user/personalFileWidget';
import { TopBar } from '~/widgets/user/topBar';
import { Trophy } from '~/widgets/user/trophy';

import { MrBeastPageMenu, mrBeastPageMenu } from './mrBeastPageConfig';
import { mrBeastPageData } from './mrBeastPageData';
import { BurgerSection } from './sections/burger';
import { HiringSection } from './sections/hiring';
import { NewsSection } from './sections/news';
import { StoreSection } from './sections/store';
import { trophyData } from './sections/trophy/trophyData';
import { YoutubeSection } from './sections/youtube';

const Section: Record<MrBeastPageMenu, JSX.Element> = {
  trophies: <Trophy userRole="viewer" {...trophyData} />,
  general: <div>General</div>,
  youtube: <YoutubeSection />,
  store: <StoreSection />,
  burger: <BurgerSection />,
  news: <NewsSection />,
  hiring: <HiringSection />,
};

function MrBeastPage(): JSX.Element {
  const [isTrophyVisible, setIsTrophyVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MrBeastPageMenu>('hiring');

  const tabs = mrBeastPageMenu.slice(1);

  return (
    <StyledUserPageContainer>
      <TopBar userRole="viewer" {...mrBeastPageData.header} />

      <StyledMenuWrapper>
        <StyledPersonalFileWidgetWrapper>
          <PersonalFileWidget files={mrBeastPageData.personalFiles} />
          <TrophyButton
            active={isTrophyVisible}
            onClick={() => setIsTrophyVisible((prev) => !prev)}
          />
        </StyledPersonalFileWidgetWrapper>

        <StyledTabsWrapper>
          {tabs.map(({ label, value }) => (
            <StyledTab
              key={value}
              onClick={() => setActiveMenu(value)}
              selected={activeMenu === value}
            >
              {label}
            </StyledTab>
          ))}
        </StyledTabsWrapper>
      </StyledMenuWrapper>

      {isTrophyVisible && <Trophy userRole="viewer" {...trophyData} />}
      {!isTrophyVisible && Section[activeMenu]}
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

const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  width: 100%;
  padding: 0 8px;
`;

const StyledPersonalFileWidgetWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledTabsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const StyledTab = withAttrs({ color: 'default', variant: 'underline' }, Tab);
