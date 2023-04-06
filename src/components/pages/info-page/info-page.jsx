import React from 'react';
import PropTypes from 'prop-types';

import Loading from './loading/loading';
import Error from './error/error';
import NotFound from './not-found/not-found';

const InfoPage = ({isDataLoaded, isFetchingError, isNotFoundError}) => {
  return (
    <>
      {(!isDataLoaded && !isFetchingError) &&
        <Loading />
      }

      {(isFetchingError && !isNotFoundError) &&
        <Error />
      }

      {isNotFoundError &&
        <NotFound />
      }
    </>
  );
};

InfoPage.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  isFetchingError: PropTypes.bool.isRequired,
  isNotFoundError: PropTypes.bool.isRequired,
};
export default InfoPage;
