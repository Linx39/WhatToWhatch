import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {HttpCode} from '../../const';

export const dispatchData = (fetchData, isDataLoaded, setIsFetching, setisNotFoundError, setIsFetchingError, id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchData(id))
      .catch((err) => {
        if (err === HttpCode.PAGE_NOT_FOUND) {
          setisNotFoundError(true);
        }
        setIsFetchingError(true);
        return;
      })
      .finally(() => setIsFetching(false));
    }
  }, [isDataLoaded]);
};
