import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFoundPage from '../pages/info-page/not-found-page/not-found-page';
import LoadingPage from '../pages/info-page/loading-page/loading-page';
import PrivateRoute from '../private-router/private-route';
import {Patch, AuthorizationStatus} from '../../const';

const App = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);

  if (authorizationStatus === AuthorizationStatus.UNKNOW) {
    return (
      <LoadingPage />
    );
  }

  return (
    <Switch>
      <Route exact path={Patch.MAIN}>
        <Main />
      </Route>

      <Route exact path={Patch.LOGIN}>
        <SignIn />
      </Route>

      <PrivateRoute exact
        path={Patch.MY_LIST}
        render={() => <MyList />}>
      </PrivateRoute>

      <Route exact path={`${Patch.FILMS}/:id`}>
        <Film />
      </Route>

      <PrivateRoute exact
        path={`${Patch.FILMS}/:id/review`}
        render={() => <AddReview />}>
      </PrivateRoute>

      <Route exact path={`${Patch.PLAYER}/:id`}>
        <Player />
      </Route>

      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default App;
