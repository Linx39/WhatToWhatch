import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../pages/info-page/loading/loading';
import Error from '../pages/info-page/error/error';
import NotFound from '../pages/info-page/not-found/not-found';

export const withInfoPage = (Component) => (isDataLoaded, isFetchingError, isNotFoundError) => {
  return (
    <>
      {isDataLoaded && <Component />}

      {(!isDataLoaded && !isFetchingError) && <Loading />}

      {(isFetchingError && !isNotFoundError) && <Error />}

      {isNotFoundError && <NotFound />}
    </>
  );
};

// withInfoPage.propTypes = {
//   isFetchingError: PropTypes.bool.isRequired,
//   isNotFoundError: PropTypes.bool.isRequired,
// };
