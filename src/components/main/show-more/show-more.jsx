import React from "react";
import {useSelector, useDispatch} from 'react-redux';

import {changeFilmsCount} from '../../../store/action';
import {FilmsCount} from '../../../const';

const getNewCount = (prevCount, maxCount) => {
  const nextCount = prevCount + FilmsCount.MAIN;
  const newCount = nextCount > maxCount ? maxCount : nextCount;

  return newCount;
};

const ShowMore = () => {
  const {count} = useSelector((state) => state.FILMS_LIST_ACTIONS);
  const {films} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();
  const onChangeFilmsCount = (newCount) => dispatch(changeFilmsCount(newCount));

  const handleShowMoreClick = () => {
    const newCount = getNewCount(count, films.length);
    onChangeFilmsCount(newCount);
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
