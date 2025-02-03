import styled from '@emotion/styled';
import { JSX } from 'react';

import { ProfileDropdown } from '~/shared/ui/molecules/ProfileDropdown';
import { SideBarWidgetHeader } from '~/shared/ui/molecules/SideBarWidgetHeader';

function ProfileType(): JSX.Element {
  return (
    <StyledWrapper>
      <SideBarWidgetHeader title="Profile type" />
      <ProfileDropdown />
    </StyledWrapper>
  );
}

export { ProfileType };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
