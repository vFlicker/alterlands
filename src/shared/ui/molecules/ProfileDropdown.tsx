import styled from '@emotion/styled';
import { JSX } from 'react';

import { Image } from '~/shared/assets/images';
import { Color } from '~/shared/theme/colors';
import { Avatar } from '~/shared/ui/atoms/Avatar';
import { Icon, VerifiedIcon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

const IS_VERIFIED = true;

function ProfileDropdown(): JSX.Element {
  return (
    <StyledWrapper>
      <Avatar size="medium" src={Image.avatar.currentUser} />

      <StyledProfileInfo>
        <StyledTop>
          <StyledProfileName>Anna Kushch</StyledProfileName>
          {IS_VERIFIED && <VerifiedIcon />}
        </StyledTop>
        <StyledProfileEmail>@anna.kushch</StyledProfileEmail>
      </StyledProfileInfo>

      <StyledToggler>
        <Icon name="icon-chevron" />
      </StyledToggler>
    </StyledWrapper>
  );
}

export { ProfileDropdown };

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
`;

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StyledTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledProfileName = withAttrs({ variant: 'body-3' }, Typography);

const StyledProfileEmail = withAttrs(
  { variant: 'body-4' },
  styled(Typography)`
    color: ${Color.WHITE_42};
  `,
);

const StyledToggler = withAttrs(
  {
    color: 'transparent',
    variant: 'filled',
    size: 'small',
  },
  styled(IconButton)`
    margin-left: auto;

    & svg {
      stroke: ${Color.WHITE_70};
    }

    &:hover svg {
      stroke: ${Color.WHITE_98};
    }
  `,
);
