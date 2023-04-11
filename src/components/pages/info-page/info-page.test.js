import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import InfoPage from './info-page';
import {InfoText} from '../../../const';

const mockStore = configureStore({});

describe(`Test InfoPage`, () => {
  const store = mockStore({});
  const history = createMemoryHistory();
  it(`if not fetching error should be render 'Loading'`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <InfoPage
              isFetchingError={false}
              isNotFoundError={false}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(new RegExp(`${InfoText.LOADING}`, `i`))).toBeInTheDocument();
  });

  it(`if fetching error should be render 'Error'`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <InfoPage
              isFetchingError={true}
              isNotFoundError={false}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(new RegExp(`${InfoText.LOADING_ERROR}`, `i`))).toBeInTheDocument();
  });

  it(`if error 404 should be render 'NotFound'`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <InfoPage
              isFetchingError={true}
              isNotFoundError={true}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(new RegExp(`${InfoText.ERROR_404}`, `i`))).toBeInTheDocument();
  });
});
