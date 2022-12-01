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

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={Patch.MAIN} exact>
          <Main />
        </Route>
        <Route path={Patch.LOGIN} exact>
          <SignIn />
        </Route>
        <Route path={Patch.MY_LIST} exact>
          <MyList />
        </Route>
        <Route path={`${Patch.FILMS}/:id`} exact>
          <Film />
        </Route>
        <Route path={`${Patch.FILMS}/:id/review`} exact>
          <AddReview />
        </Route>
        <Route path={`${Patch.PLAYER}/:id`} exact>
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
