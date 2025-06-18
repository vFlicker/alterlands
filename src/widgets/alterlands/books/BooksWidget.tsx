import styled from '@emotion/styled';
import { JSX } from 'react';

import { Tab } from '~/shared/ui/atoms/Tab';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Book } from './Book';
import { BookData } from './bookTypes';

type BooksWidgetProps = {
  widgetTitle: string;
  data: BookData[];
  className?: string;
};

const tabs = [
  { title: 'EN', selected: true },
  { title: 'UA', selected: false },
  { title: 'RU', selected: false },
];

function BooksWidget({
  className,
  data,
  widgetTitle,
}: BooksWidgetProps): JSX.Element {
  return (
    <StyledBooksWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />
      <StyledTabsList>
        {tabs.map(({ selected, title }) => (
          <Tab key={title} color="gray" variant="default" selected={selected}>
            {title}
          </Tab>
        ))}
      </StyledTabsList>
      <StyledBookList>
        {data.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </StyledBookList>
    </StyledBooksWidgetWrapper>
  );
}

export { BooksWidget };

const StyledBooksWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledTabsList = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const StyledBookList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;
