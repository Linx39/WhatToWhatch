import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {filmProp} from '../../../../props-types';

const BreadCrumbs = ({film, onClick}) => {
  const {name} = film;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="#" onClick={onClick} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

BreadCrumbs.propTypes = {
  film: filmProp,
  onClick: PropTypes.func.isRequired,
};

export default BreadCrumbs;
