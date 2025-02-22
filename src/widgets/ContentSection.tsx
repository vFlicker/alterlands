import { JSX } from 'react';

type ContentSectionProps = {
  className?: string;
};

function ContentSection({ className }: ContentSectionProps): JSX.Element {
  return <div className={className}>ContentSection</div>;
}

export { ContentSection };
