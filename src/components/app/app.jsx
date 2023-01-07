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
  const goMyList = (history) => history.push(Patch.MY_LIST);
  const goMain = (history) => history.push(Patch.MAIN);
  const goFilm = (id, history) => history.push(`${Patch.FILMS}/${id}`);
  const goReview = (id, history) => history.push(`${Patch.FILMS}/${id}/review`);
  const goPlayer = (id, history) => history.push(`${Patch.PLAYER}/${id}`);
  // const goNoFoundPage = (history) => history.push(`${Patch.PLAYER}/${id}`);

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact
          path={Patch.MAIN}
          render={({history}) => (
            <Main
              goMyList={() => goMyList(history)}
              goFilm={(id) => goFilm(id, history)}
            />
          )}
        />

        <Route exact
          path={Patch.LOGIN}
          render={({history}) => (
            <SignIn
              goMain={() => goMain(history)}
            />
          )}
        />

        <PrivateRoute exact
          path={Patch.MY_LIST}
          render={({history}) => (
            <MyList
              goMain={() => goMain(history)}
            />
          )}
        >
        </PrivateRoute>

        <Route exact
          path={`${Patch.FILMS}/:id`}
          render={({history}) => (
            <Film
              goMain={() => goMain(history)}
              goMyList={() => goMyList(history)}
              goPlayer={(id) => goPlayer(id, history)}
              goReview={(id) => goReview(id, history)}
            />
          )}
        />

        <PrivateRoute exact
          path={`${Patch.FILMS}/:id/review`}
          render={({history}) => (
            <AddReview
              goMain={() => goMain(history)}
              goMyList={() => goMyList(history)}
              goFilm={(id) => goFilm(id, history)}
            />
          )}
        >
        </PrivateRoute>

        <Route path={`${Patch.PLAYER}/:id`} exact>
          <Player />
        </Route>

        <Route
          render={({history}) => (
            <NotFoundPage
              goMain={() => goMain(history)}
              goMyList={() => goMyList(history)}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
