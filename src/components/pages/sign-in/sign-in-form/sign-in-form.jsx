import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import SignInMessage from '../sign-in-message/sign-in-message';
import {login} from '../../../../store/api-actions';
// import {isEmailValid} from '../../../../utils';
import {EMAIL_REGEXP} from '../../../../const';

const MessageText = {
  NOT_EMAIL_CORRECT: `Please enter a valid email address`,
  NOT_EMAIL_VALID: `We can\’t recognize this email <br /> and password combination. Please try again.`,
  FETCHING: `Loading...`,
  FETCHING_ERROR: `Error authorization!`,
};

const SignInForm = () => {
  const [isLoginCorrect, setIsLoginCorrect] = useState(true);
  const [isFormCorrect, setIsFormCorrect] = useState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isErrorSubmiting, setIsErrorSubmiting] = useState(false);
  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const checkIsLoginCorrect = (loginValue) => (EMAIL_REGEXP.test(loginValue) || loginValue === ``);
  const checkIsFormCorrect = (loginValue, passwordValue) => (loginValue !== `` && passwordValue !== ``);

  const handleLoginInput = (evt) => {
    evt.preventDefault();
    setIsFormCorrect(true);

    const loginValue = loginRef.current.value;

    if (!checkIsLoginCorrect(loginValue)) {
      setIsLoginCorrect(false);
      return;
    }

    setIsLoginCorrect(true);
  };

  const handlePasswordInput = (evt) => {
    evt.preventDefault();
    setIsFormCorrect(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const loginValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (!checkIsFormCorrect(loginValue, passwordValue) || !checkIsLoginCorrect(loginValue)) {
      setIsFormCorrect(false);
      return;
    }

    setIsErrorSubmiting(false);
    setIsSubmiting(true);

    dispatch(login({email: loginValue, password: passwordValue}))
      .catch(() => {
        setIsSubmiting(false);
        setIsErrorSubmiting(true);
      });
      // .finally(() => {
      //   setIsSubmiting(false);
      // });
  };

  return (
    <div className="sign-in user-page__content">
      <form onSubmit={handleSubmit} action="#" className="sign-in__form">
        {/* {!isEmailCorrect && <SignInMessage text={MessageText.NOT_EMAIL_CORRECT} />}
        {!isFormCorrect && <SignInMessage text={MessageText.NOT_FORM_CORRECT} />}
        {isFetching && <SignInMessage text={MessageText.FETCHING} />}
        {isFetchingError && <SignInMessage text={MessageText.FETCHING_ERROR} />} */}
        {!isLoginCorrect &&
          <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>
        }
        {!isFormCorrect &&
          <div className="sign-in__message">
            <p>We can\’t recognize this email <br /> and password combination. Please try again.</p>
          </div>
        }
        {isSubmiting &&
          <div className="sign-in__message">
            <p>Submiting...</p>
          </div>
        }
        {isErrorSubmiting &&
          <div className="sign-in__message">
            <p>Error authorization!</p>
          </div>
        }

        <div className="sign-in__fields">
          <div className={isLoginCorrect ? `sign-in__field` : `sign-in__field--error`}>
            <input
              ref={loginRef}
              disabled={isSubmiting}
              onInput={handleLoginInput}
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
              disabled={isSubmiting}
              onInput={handlePasswordInput}
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
            disabled={isSubmiting || !isLoginCorrect}
            className="sign-in__btn"
            type="submit"
          >
              Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
