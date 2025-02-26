import styled from '@emotion/styled';
import { JSX, MouseEvent, useState } from 'react';

import { Button } from '~/shared/ui/atoms/Button';
import { Icon } from '~/shared/ui/atoms/Icon';
import { OptionList } from '~/shared/ui/molecules/Select';

const options = [
  {
    label: 'Verified',
    value: 'Verified',
  },
  {
    label: 'Anonymous',
    value: 'Anonymous',
  },
  {
    label: 'Job account',
    value: 'Job account',
  },
];

function ChangeProfileButton(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledChangeProfileButtonWrapper>
      <StyledButton
        color="accent"
        variant="outlined"
        rightIcon={
          <Icon name={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'} />
        }
        onClick={handleButtonClick}
      >
        Verified
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

export { ChangeProfileButton };

const StyledChangeProfileButtonWrapper = styled.div`
  position: relative;
`;

const StyledButton = styled(Button)`
  height: 36px;
  width: 124px;
  padding: 7px 17px 7px 29px;
`;
