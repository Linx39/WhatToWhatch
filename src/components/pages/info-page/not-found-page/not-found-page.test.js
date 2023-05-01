import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import NotFoundPage from './not-found-page';
import {InfoText} from '../../../../const';

const mockStore = configureStore({});

it(`NotFoundPage should render correctly`, () => {
  const history = createMemoryHistory();
  const linkText = `Вернуться на главную`;

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <NotFoundPage />
        </Router>
      </Provider>
  );

  expect(screen.getByText(new RegExp(`${InfoText.PAGE_NOT_FOUND}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${linkText}`, `i`))).toBeInTheDocument();
});
