import React from 'react';
import PropTypes from 'prop-types';

import Loading from './loading/loading';
import Error from './error/error';
import NotFound from './not-found/not-found';

const InfoPage = ({isFetchingError, isNotFoundError}) => {
  return (
    <>
      {!isFetchingError && <Loading />}

      {(isFetchingError && !isNotFoundError) && <Error />}

      {isNotFoundError && <NotFound /> }
    </>
  );
};

InfoPage.propTypes = {
  isFetchingError: PropTypes.bool.isRequired,
  isNotFoundError: PropTypes.bool.isRequired,
};

export default InfoPage;
