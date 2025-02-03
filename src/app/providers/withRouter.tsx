import { ComponentType, JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { BASE_NAME } from '~/shared/libs/router/appRoute';

const withRouter = (Component: ComponentType): ComponentType => {
  function WithRouter(): JSX.Element {
    return (
      <BrowserRouter basename={BASE_NAME}>
        <Component />
      </BrowserRouter>
    );
  }

  return WithRouter;
};

export { withRouter };
