import React from "react";
import PropTypes from 'prop-types';

const ShowMore = ({onClick}) => {
  const handleMouseClick = onClick;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={handleMouseClick}
      >
        Show more
      </button>
    </div>
  );
};


ShowMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ShowMore;
