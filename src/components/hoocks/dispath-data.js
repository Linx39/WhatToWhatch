import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {HttpCode} from '../../const';


export const dispatchData = (fetchData, isDataLoaded, isLoaded, setIsLoaded, setIsNotFoundPage, setIsFetchingError, id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchData(id))
      .catch((err) => {
        if (err === HttpCode.PAGE_NOT_FOUND) {
          setIsNotFoundPage(true);
        }
        setIsFetchingError(true);
        return;
      })
      .finally(() => setIsLoaded(isLoaded && isDataLoaded));
    }
  }, [isDataLoaded]);
};
