import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureStore({});
const history = createMemoryHistory();

const renderWithProviders = (children, mockState = {}) => {
  const store = mockStore(mockState);

  return render(
      <Provider store={store}>
        <Router history={history}>
          {children}
        </Router>
      </Provider>
  );
};

export {history, renderWithProviders};
