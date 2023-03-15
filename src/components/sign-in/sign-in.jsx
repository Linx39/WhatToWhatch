import React, {useState, useRef, useEffect} from 'react';
import PropTypes from "prop-types";
import {useSelector, useDispatch} from 'react-redux';

import Header from '../common-components/header/header';
import Footer from '../common-components/footer/footer';
import {login} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';
import {AuthorizationStatus, Patch, AdditionalClass} from '../../const';
import {isEmailValid} from '../component-utils';

const SignIn = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();

  const [isFormCorrect, setIsFormCorrect] = useState(true);
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const loginValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (loginValue === `` || passwordValue === ``) {
      setIsFormCorrect(false);
      return;
    }

    if (!isEmailValid(loginValue)) {
      return;
    }

    dispatch(login({login: loginValue, password: passwordValue}));
  };

  const handleInput = (evt) => {
    evt.preventDefault();

    if (!isEmailValid(loginRef.current.value)) {
      setIsEmailCorrect(false);
      return;
    }

    setIsEmailCorrect(true);
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(redirectToRoute((Patch.MAIN)));
    }
  }, [authorizationStatus]);

  return (
    <div className="user-page">
      <Header additionalHeaderClass={AdditionalClass.HEADER.USER_PAGE} isUserBlock={false}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          {!isEmailCorrect &&
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>
          }

          {!isFormCorrect &&
            <div className="sign-in__message">
              <p>We can\’t recognize this email <br /> and password combination. Please try again.</p>
            </div>
          }

          <div className="sign-in__fields">
            <div className={isEmailCorrect ? `sign-in__field` : `sign-in__field--error`}>
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onInput={handleInput}
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

      <Footer />
    </div>
  );
};

SignIn.propTypes = {
  goMain: PropTypes.func,
};

export default SignIn;
