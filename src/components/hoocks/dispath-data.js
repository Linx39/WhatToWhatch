import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {HttpCode, FetchingStatus} from '../../const';

export const dispatchData = (fetchData, setFetchingStatus, id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(id))
    .catch((err) => {
      switch (err) {
        case HttpCode.PAGE_NOT_FOUND:
          setFetchingStatus(FetchingStatus.PAGE_NOT_FOUND);
          break;
        default:
          setFetchingStatus(FetchingStatus.SERVER_ERROR);
      }
      // if (err === HttpCode.PAGE_NOT_FOUND) {
      //   setFetchingStatus(FetchingStatus.PAGE_NOT_FOUND);
      //   return;
      // }
      // setFetchingStatus(FetchingStatus.SERVER_ERROR);
    });
  }, [dispatch]);
};
