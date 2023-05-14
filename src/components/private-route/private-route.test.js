import React from 'react';
import {Route} from 'react-router-dom';
import {screen} from '@testing-library/react';

import PrivateRoute from './private-route';
import {history, renderWithProviders} from '../../test-utils/render-with-providers';
import {mockStateUserAutch, mockStateUserNoAutch} from '../../test-utils/mock-state';
import {AppRoute} from '../../const';

const privateRoute = `/private`;

describe(`Test PrivateRoute`, () => {
  const Switch = () => (
    <>
      <Route
        exact
        path={AppRoute.LOGIN}
      >
        <h1>Public Route</h1>
      </Route>

      <PrivateRoute
        exact
        path={privateRoute}
        render={() => (<h1>Private Route</h1>)}
      />
    </>
  );

  it(`Should be render component for public route, when user not authorized`, () => {
    history.push(privateRoute);

    renderWithProviders(
        <Switch />,
        mockStateUserNoAutch
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it(`Should be render component for private route, when user authorized`, () => {
    history.push(privateRoute);

    renderWithProviders(
        <Switch />,
        mockStateUserAutch
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
