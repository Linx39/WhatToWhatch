import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {HttpCode, FetchingStatus} from '../../const';

export const dispatchData = (fetchData, isDataLoaded, setFetchingStatus, id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchData(id))
      .catch((err) => {
        if (err === HttpCode.PAGE_NOT_FOUND) {
          setFetchingStatus(FetchingStatus.PAGE_NOT_FOUND);
          return;
        }
        setFetchingStatus(FetchingStatus.SERVER_ERROR);
      });
    }
  }, [isDataLoaded]);
};
