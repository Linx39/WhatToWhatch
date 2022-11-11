import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';

import {MOVIES} from '../const-props-type';
import {Patch} from '../../const';

const COUNT = {
  MAIN: 8,
  MOVIE_PAGE: 4,
  MY_LIST: 5,
};

const App = (props) => {
  const {movies} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={Patch.MAIN} exact>
          <Main movies={movies} count={COUNT.MAIN} />
        </Route>
        <Route path={Patch.LOGIN} exact>
          <SignIn />
        </Route>
        <Route path={Patch.MY_LIST} exact>
          <MyList movies={movies} count={COUNT.MY_LIST} />
        </Route>
        <Route path="/films/:id" exact>
          <MoviePage movies={movies} count={COUNT.MOVIE_PAGE} />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview movies={movies} />
        </Route>
        <Route path="/player/:id" exact>
          <Player movies={movies} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: MOVIES,
};

export default App;
