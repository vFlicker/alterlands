import styled from '@emotion/styled';
import { JSX, MouseEvent, useState } from 'react';

import { Button } from '~/shared/ui/atoms/Button';
import { Icon } from '~/shared/ui/atoms/Icon';
import { OptionList } from '~/shared/ui/molecules/Select';
import { withAttrs } from '~/shared/ui/withAttrs';

const options = [
  {
    label: 'Paid Message — $5.00',
    value: 'Paid Message — $5.00',
  },
  {
    label: 'Learn More',
    value: 'Learn More',
  },
];

function MessageButton(): JSX.Element {
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
        Message
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

export { MessageButton };

const StyledChangeProfileButtonWrapper = styled.div`
  position: relative;
`;

const StyledButton = withAttrs(
  {
    size: 'medium',
    color: 'accent',
    variant: 'outlined',
  },
  styled(Button)`
    min-width: 102px;
    padding: 6px 7px 6px 19px;
  `,
);
