import React from 'react';
import {useParams} from 'react-router-dom';

import PlayerPage from './player-page/player-page';
import InfoPage from '../info-page/info-page';
import {fetchFilm} from '../../../store/api-actions';
import {useFetchData} from '../../hoocks/use-fetch-data';

const Player = () => {
  const {id} = useParams();
  const [
    {film},
    {isDataLoaded, isFetchingError, isNotFoundError}
  ] = useFetchData({fetchFilm, id});

  return (
    <>
      {isDataLoaded
        ? <PlayerPage
          film={film}
        />
        : <InfoPage
          isFetchingError={isFetchingError}
          isNotFoundError={isNotFoundError}
        />
      }
    </>
  );
};

export default Player;
