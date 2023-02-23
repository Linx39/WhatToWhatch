import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-router/private-route';

import {Patch} from '../../const';

const App = () => {
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
