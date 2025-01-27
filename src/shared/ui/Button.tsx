import { JSX, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  className?: string;
}>;

function Button({ children, className }: ButtonProps): JSX.Element {
  return <button className={className}>{children}</button>;
}

export { Button };
