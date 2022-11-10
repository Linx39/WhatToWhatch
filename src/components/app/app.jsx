import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';

import {CARDS_COUNT, MOVIE_CARDS} from '../const-props-type';
import {Patch} from '../../const';

const App = (props) => {
  const {cardsCount, movieCards} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Patch.MAIN}>
          <Main cardsCount={cardsCount} movieCards={movieCards} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList cardsCount={cardsCount} movieCards={movieCards} />
        </Route>
        <Route exact path="/films/:id">
          <MoviePage movieCard={movieCards[0]}/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview movieCard={movieCards[3]} />
        </Route>
        <Route exact path="/player/:id">
          <Player movieCard={movieCards[1]} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cardsCount: CARDS_COUNT,
  movieCards: MOVIE_CARDS,
};

export default App;
