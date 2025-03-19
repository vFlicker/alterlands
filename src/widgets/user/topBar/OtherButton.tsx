import styled from '@emotion/styled';
import { JSX, MouseEvent, useState } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { OptionList } from '~/shared/ui/molecules/Select';
import { withAttrs } from '~/shared/ui/withAttrs';

const options = [
  {
    label: 'YouTube Work',
    value: 'YouTube Work',
  },
  {
    label: 'Notifications',
    value: 'Notifications',
  },
  {
    label: 'Contract',
    value: 'Contract',
  },
];

function OtherButton(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledChangeProfileButtonWrapper>
      <StyledIconButton onClick={handleButtonClick}>
        <Icon name="icon-dots" />
      </StyledIconButton>

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

export { OtherButton };

const StyledChangeProfileButtonWrapper = styled.div`
  position: relative;
`;

const StyledIconButton = withAttrs(
  {
    size: 'medium',
    variant: 'filled',
    color: 'neutral',
  },
  styled(IconButton)`
    width: 37px;
    height: 37px;
  `,
);
