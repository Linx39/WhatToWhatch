import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const BreadCrumbs = ({name, onClick}) => {
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
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BreadCrumbs;
