import React from "react";
import {useSelector, useDispatch} from 'react-redux';

import {changeFilmsCount} from '../../../../store/action';
import {FilmsCount} from '../../../../const';

const ShowMore = () => {
  const {count} = useSelector((state) => state.FILMS_ACTIONS);
  const {films} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const handleShowMoreClick = () => {
    const newCount = Math.min(count + FilmsCount.MAIN, films.length);
    dispatch(changeFilmsCount(newCount));
  };

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
