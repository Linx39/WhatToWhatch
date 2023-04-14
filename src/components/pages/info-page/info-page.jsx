import React from 'react';
import PropTypes from 'prop-types';

import Loading from './loading/loading';
import Error from './error/error';
import NotFound from './not-found/not-found';
import {FetchingStatus} from '../../../const';

const InfoPage = ({fetchingStatus}) => {
  return (
    <>
      {fetchingStatus === FetchingStatus.LOADING && <Loading />}

      {fetchingStatus === FetchingStatus.PAGE_NOT_FOUND && <NotFound /> }

      {fetchingStatus === FetchingStatus.SERVER_ERROR && <Error />}
    </>
  );
};

InfoPage.propTypes = {
  fetchingStatus: PropTypes.string.isRequired,
};

export default InfoPage;
