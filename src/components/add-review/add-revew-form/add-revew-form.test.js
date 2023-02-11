import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import AddReviewForm from './add-revew-form';

// НЕ РАБОТАЕТ

const mockStore = configureStore({});

it(`Render 'AddReviewForm' when user navigate to '/login' url`, () => { // описание!!!
  const history = createMemoryHistory();
  // history.push(`/login`);

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <AddReviewForm film={{}}/>
        </Router>
      </Provider>
  );

  expect(screen.getByText(/Post/i)).toBeInTheDocument();
  // expect(screen.getByText(/Хотите узнать свой результат\? Представьтесь!/i)).toBeInTheDocument();
  // expect(screen.getByLabelText(/Логин/i)).toBeInTheDocument();
  // expect(screen.getByLabelText(/Пароль/i)).toBeInTheDocument();

  // userEvent.type(screen.getByTestId(`login`), `keks`);
  // userEvent.type(screen.getByTestId(`password`), `123456`);

  // expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
  // expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
});
