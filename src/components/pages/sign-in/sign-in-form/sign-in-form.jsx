import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {login} from '../../../../store/api-actions';
import {isEmailValid} from '../../../../utils';

const SignInForm = ({onFetchingError}) => {
  const dispatch = useDispatch();
  const [isFormCorrect, setIsFormCorrect] = useState(true);
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleInput = (evt) => {
    evt.preventDefault();

    if (!isEmailValid(loginRef.current.value)) {
      setIsEmailCorrect(false);
      return;
    }

    setIsEmailCorrect(true);
  };

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

    dispatch(login({login: loginValue, password: passwordValue}))
    .catch(() => {
      onFetchingError(true);
      return;
    });
  };

  return (
    <div className="sign-in user-page__content">
      <form onSubmit={handleSubmit} action="#" className="sign-in__form">
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
  );
};

SignInForm.propTypes = {
  onFetchingError: PropTypes.func.isRequired,
};

export default SignInForm;
