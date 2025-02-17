import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { Color } from '~/shared/theme/colors';
import { Icon } from '~/shared/ui/atoms/Icon';
import { Input } from '~/shared/ui/atoms/Input';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';

import { OpinionData } from './opinionTypes';

type SideInputProps = Pick<OpinionData, 'candidates'> & {
  className?: string;
};

const CandidateColorInputColorMap = {
  neutral: Color.WHITE_64,
  red: Color.RED_1,
  blue: Color.BLUE_2,
  green: Color.GREEN_1,
};

type CandidateColor = keyof typeof CandidateColorInputColorMap;

function SideInput({ className, candidates }: SideInputProps): JSX.Element {
  const [activeButton, setActiveButton] = useState<CandidateColor>('neutral');

  return (
    <StyledInputWrapper className={className}>
      <StyledSideButtonsWrapper>
        <LabelButton
          color="white"
          isActive={activeButton === 'neutral'}
          onClick={() => setActiveButton('neutral')}
        >
          Neutral
        </LabelButton>
        {candidates.map((candidate) => (
          <LabelButton
            key={candidate.id}
            color={candidate.color}
            isActive={activeButton === candidate.color}
            onClick={() => setActiveButton(candidate.color)}
          >
            <StyledSideButtonText>{candidate.color}</StyledSideButtonText> side
          </LabelButton>
        ))}
      </StyledSideButtonsWrapper>

      <Input
        placeholder="Write comment..."
        rightIcon={<Icon name="icon-send" />}
        $color={CandidateColorInputColorMap[activeButton]}
      />
    </StyledInputWrapper>
  );
}

export { SideInput };

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledSideButtonsWrapper = styled.div`
  display: flex;
  gap: 6px;
  padding: 0 8px;
`;

const StyledSideButtonText = styled.span`
  text-transform: capitalize;
`;
