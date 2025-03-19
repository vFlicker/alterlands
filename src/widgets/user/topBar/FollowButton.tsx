import styled from '@emotion/styled';
import { JSX, MouseEvent, useState } from 'react';

import { Button } from '~/shared/ui/atoms/Button';
import { Icon } from '~/shared/ui/atoms/Icon';
import { OptionList } from '~/shared/ui/molecules/Select';
import { withAttrs } from '~/shared/ui/withAttrs';

const options = [
  {
    label: '✅ Follow All',
    value: '✅ Follow All',
  },
  {
    label: '☑️ Follow UX/UI',
    value: '☑️ Follow UX/UI',
  },
  {
    label: '☑️ Follow MyDog',
    value: '☑️ Follow MyDog',
  },
];

function FollowButton(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledChangeProfileButtonWrapper>
      <StyledButton
        rightIcon={
          <Icon name={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'} />
        }
        onClick={handleButtonClick}
      >
        Follow
      </StyledButton>

      {isOpen && (
        <OptionList
          options={options}
          selected={options[0]}
          size="small"
          onOptionSelect={() => {}}
        />
      )}
    </StyledChangeProfileButtonWrapper>
  );
}

export { FollowButton };

const StyledChangeProfileButtonWrapper = styled.div`
  position: relative;
`;

const StyledButton = withAttrs(
  {
    size: 'medium',
    color: 'accent',
    variant: 'filled',
  },
  styled(Button)`
    min-width: 102px;
    padding: 6px 7px 6px 19px;
  `,
);
