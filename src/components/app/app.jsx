import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';

import {filmsProp} from '../props-types';
import {Patch} from '../../const';

const COUNT = {
  MAIN: 8,
  FILM: 4,
  MY_LIST: 5,
};

const App = (props) => {
  const {films: films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={Patch.MAIN} exact>
          <Main films={films} count={COUNT.MAIN} />
        </Route>
        <Route path={Patch.LOGIN} exact>
          <SignIn />
        </Route>
        <Route path={Patch.MY_LIST} exact>
          <MyList films={films} count={COUNT.MY_LIST} />
        </Route>
        <Route path="/films/:id" exact>
          <Film films={films} count={COUNT.FILM} />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview films={films} />
        </Route>
        <Route path="/player/:id" exact>
          <Player films={films} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: filmsProp,
};

export default App;
