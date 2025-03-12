import styled from '@emotion/styled';
import { JSX } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { CourseCard } from './CourseCard';
import { CourseData } from './courseTypes';

type CoursesWidgetProps = {
  widgetTitle: string;
  data: CourseData[];
  className?: string;
};

function CoursesWidget({
  className,
  data,
  widgetTitle,
}: CoursesWidgetProps): JSX.Element {
  return (
    <StyledCoursesWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={<LabelButton color="white">See more</LabelButton>}
      />

      <StyledCourseList>
        {data.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </StyledCourseList>
    </StyledCoursesWidgetWrapper>
  );
}

export { CoursesWidget };

const StyledCoursesWidgetWrapper = styled.div``;

const StyledCourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;
