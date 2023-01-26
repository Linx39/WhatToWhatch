import React, {useRef} from 'react';
import PropTypes from "prop-types";
import {useSelector, useDispatch} from 'react-redux';

import {login} from "../../store/api-actions";
import Logo from '../common-components/logo/logo';
import Copyright from '../common-components/copyright/copyright';
// import {redirectToBack} from '../../store/action';

const SignIn = () => {
  // const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const onSubmit = (authData) => {
    dispatch(login(authData));
  };

  // const onRedirectToBack = () => {
  //   dispatch(redirectToBack);
  // };


  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });

    // onRedirectToBack();
  };

  return <React.Fragment>
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isAddClass={false} isClickable={true} />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo isAddClass={true} isClickable={true} />

        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

SignIn.propTypes = {
  goMain: PropTypes.func,
};

export default SignIn;
