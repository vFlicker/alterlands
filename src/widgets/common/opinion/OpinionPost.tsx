import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { SecondaryButton } from '~/shared/ui/atoms/SecondaryButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { OpinionData } from './opinionTypes';
import { ProgressBar } from './ProgressBar';

type OpinionPostProps = OpinionData & {
  className?: string;
};

function OpinionPost({
  className,
  candidates: initialCandidates,
}: OpinionPostProps): JSX.Element {
  const [candidates, setCandidates] = useState(initialCandidates);

  const handleVote = (id: number): void => {
    setCandidates((prev) =>
      prev.map((candidate) => {
        if (candidate.id !== id) return candidate;
        return { ...candidate, votes: candidate.votes + 1 };
      }),
    );
  };

  const progressBarItems = candidates.map(({ color, id, votes }) => ({
    id,
    value: votes,
    color,
  }));

  return (
    <StyledOpinionPostWrapper className={className}>
      <StyledColumns>
        {candidates.map(({ id, color, imageUrl, name }) => (
          <StyledOption key={id}>
            <StyledImage src={imageUrl} alt={name} />
            <StyledName>{name}</StyledName>
            <StyledVoteButton color={color} onClick={() => handleVote(id)} />
          </StyledOption>
        ))}
      </StyledColumns>

      <StyledResultsBarWrapper>
        <ProgressBar items={progressBarItems} />
        <StyledResultTextWrapper>
          {candidates.map(({ id, votes }) => (
            <ResultText key={id}>{votes} votes</ResultText>
          ))}
        </StyledResultTextWrapper>
      </StyledResultsBarWrapper>
    </StyledOpinionPostWrapper>
  );
}

export { OpinionPost };

const StyledOpinionPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const StyledColumns = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 150px;
  margin-bottom: 8px;
  border-radius: ${Radius.RADIUS_4};
  object-fit: cover;
`;

const StyledName = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    margin-bottom: 12px;
  `,
);

const StyledVoteButton = withAttrs(
  { children: 'Vote' },
  styled(SecondaryButton)`
    width: 100%;
  `,
);

const StyledResultsBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const StyledResultTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ResultText = withAttrs(
  { variant: 'body-5', $color: Color.WHITE_64 },
  Typography,
);
