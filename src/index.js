import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import {createAPI} from './services/api';
import rootReducer from './store/root-reducer';
import browserHistory from './browser-history';
import App from './components/app/app';
import {requireAuthorization} from './store/user-data/user-data';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';
import {AuthorizationStatus} from './const';

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.querySelector(`#root`)
);
