import styled from '@emotion/styled';
import { JSX } from 'react';

import { ProfileDropdown } from '~/entity/user/ProfileDropdown';
import { ConfigurationHeader } from '~/shared/ui/ConfigurationHeader';

function ProfileType(): JSX.Element {
  return (
    <StyledWrapper>
      <ConfigurationHeader title="Profile type" />
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
