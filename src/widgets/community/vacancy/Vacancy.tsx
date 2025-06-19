import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Label } from '~/shared/ui/atoms/Label';
import { Typography } from '~/shared/ui/atoms/Typography';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

import { AttributeList } from './AttributeList';
import { VacancyData } from './vacancyTypes';

type VacancyProps = VacancyData & {
  className?: string;
};

function Vacancy({
  className,
  avatar,
  date,
  description,
  fullName,
  jobAttributes,
  skills,
  title,
  viewCount,
}: VacancyProps): JSX.Element {
  return (
    <StyledVacancyWrapper className={className}>
      <StyledUserMeta
        avatar={avatar}
        date={date}
        fullName={fullName}
        viewCount={viewCount}
        orientation="horizontal"
      />

      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>

      {skills && (
        <StyledSkillList>
          {skills.map((attribute) => (
            <Label key={attribute}>{attribute}</Label>
          ))}
        </StyledSkillList>
      )}

      <AttributeList attributes={jobAttributes} />
    </StyledVacancyWrapper>
  );
}

export { Vacancy };

const StyledVacancyWrapper = styled.div``;

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 12px;
`;

const StyledTitle = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    margin-bottom: 4px;
  `,
);

const StyledDescription = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  styled(Typography)`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-bottom: 12px;
  `,
);

const StyledSkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  margin-bottom: 12px;
`;
