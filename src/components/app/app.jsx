import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-router/private-router';
import browserHistory from "../../browser-history";
import {Patch} from '../../const';

const App = () => {
  const goBack = (history) => history.goBack();

  return (
    <Router history={browserHistory}>
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

        <Route exact path={`${Patch.PLAYER}/:id`}
          render={({history}) => (
            <Player
              goBack={() => goBack(history)}
            />
          )}
        />

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
