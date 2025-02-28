import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Button } from '~/shared/ui/atoms/Button';
import { Typography } from '~/shared/ui/atoms/Typography';
import { VerifiedIcon } from '~/shared/ui/atoms/VerifiedIcon';
import { withAttrs } from '~/shared/ui/withAttrs';

import { ChangeProfileButton } from './ChangeProfileButton';
import { UserData } from './topBarTypes';

type TopBarProps = UserData & {
  className?: string;
};

function TopBar({
  className,
  avatarUrl,
  birthday,
  description,
  email,
  name,
  additionalInfo,
}: TopBarProps): JSX.Element {
  return (
    <StyledTopBarWrapper className={className}>
      <StyledAvatar src={avatarUrl} alt={name} />

      <StyledWrapper>
        <StyledContent>
          <StyledName>
            {name} <VerifiedIcon />
          </StyledName>
          <StyledEmail>{email}</StyledEmail>
          <StyledBirthday>{birthday}</StyledBirthday>
          <StyledDescription>{description}</StyledDescription>
        </StyledContent>

        <StyledLeftWrapper>
          <StyledActionsWrapper>
            <ChangeProfileButton />
            <StyledActionButton size="medium" color="neutral" variant="filled">
              Edit profile
            </StyledActionButton>
          </StyledActionsWrapper>
          <StyledAdditionInfoList>
            {additionalInfo.map(({ count, label }) => (
              <StyledAdditionInfoItem key={label}>
                <StyledAdditionInfoCount>{count}</StyledAdditionInfoCount>
                <StyledAdditionInfoLabel>{label}</StyledAdditionInfoLabel>
              </StyledAdditionInfoItem>
            ))}
          </StyledAdditionInfoList>
        </StyledLeftWrapper>
      </StyledWrapper>
    </StyledTopBarWrapper>
  );
}

export { TopBar };

const StyledTopBarWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 24px;
  border-radius: ${Radius.RADIUS_16};
  background-color: ${Color.DARK};
`;

const StyledAvatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: ${Radius.RADIUS_CIRCLE};
`;

const StyledWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledName = withAttrs(
  { variant: 'heading-3' },
  styled(Typography)`
    display: flex;
    align-items: center;
    gap: 6px;
  `,
);

const StyledEmail = withAttrs(
  { variant: 'body-2', $color: Color.WHITE_70 },
  Typography,
);

const StyledBirthday = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_70 },
  Typography,
);

const StyledDescription = withAttrs({ variant: 'body-3' }, Typography);

const StyledLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledActionButton = styled(Button)`
  width: 124px;
`;

const StyledAdditionInfoList = styled.div`
  display: flex;
  gap: 45px;
  padding: 0 8px;
`;

const StyledAdditionInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const StyledAdditionInfoCount = withAttrs({ variant: 'heading-4' }, Typography);

const StyledAdditionInfoLabel = withAttrs({ variant: 'body-3' }, Typography);
