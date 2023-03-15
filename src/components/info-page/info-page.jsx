import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../common-components/header/header';
import Footer from '../common-components/footer/footer';

const InfoPage = ({infoText, linkTo, linkText}) => {
  return (
    <>
      <section className="movie-card">
        <h1 className="visually-hidden">WTW</h1>

        <Header isUserBlock={false} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title">{infoText}</h2>

          {linkTo !== `` &&
            <h2 className="catalog__title">
              <Link to={linkTo}>{linkText}</Link>
            </h2>
          }
        </section>

        <Footer />
      </div>
    </>
  );
};

InfoPage.defaultProps = {
  infoText: ``,
  linkTo: ``,
  linkText: ``,
};

InfoPage.propTypes = {
  infoText: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default InfoPage;
