import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({titleText}) => {
  return (
    <h1 className="page-title user-page__title">{titleText}</h1>
  );
};

PageTitle.propTypes = {
  titleText: PropTypes.string,
};

export default PageTitle;
