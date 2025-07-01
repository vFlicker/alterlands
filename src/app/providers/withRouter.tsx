import { ComponentType, JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouter = (Component: ComponentType): ComponentType => {
  function WithRouter(): JSX.Element {
    return (
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    );
  }

  return WithRouter;
};

export { withRouter };
