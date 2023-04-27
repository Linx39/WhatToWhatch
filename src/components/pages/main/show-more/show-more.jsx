import React from "react";
import {useDispatch} from 'react-redux';

import {changeFilmsCount} from '../../../../store/action';

const ShowMore = () => {
  const dispatch = useDispatch();

  const handleShowMoreClick = () => dispatch(changeFilmsCount());

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={handleShowMoreClick}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMore;
