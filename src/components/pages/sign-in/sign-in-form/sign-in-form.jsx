import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import SignInMessage from '../sign-in-message/sign-in-message';
import {login} from '../../../../store/api-actions';
import {EMAIL_REGEXP} from '../../../../const';

const MessageText = {
  NOT_VALID_LOGIN: `Please enter a valid email address`,
  NOT_CORRECT_FORM: `We can\’t recognize this email <br /> and password combination. Please try again.`,
  SUBMITING: `Submiting...`,
  SUBMITING_ERROR: `Error authorization!`,
};

const SignInForm = () => {
  const [isLoginValid, setIsLoginValid] = useState(true);
  const [isFormCorrect, setIsFormCorrect] = useState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isSubmitingError, setIsSubmitingError] = useState(false);
  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const checkIsLoginValid = (loginValue) => (EMAIL_REGEXP.test(loginValue) || loginValue === ``);
  const checkIsFormCorrect = (loginValue, passwordValue) => (loginValue !== `` && passwordValue !== ``);

  const getSignInMessage = () => {
    if (!isLoginValid) {
      return <SignInMessage text={MessageText.NOT_VALID_LOGIN} />;
    }

    if (!isFormCorrect) {
      return <SignInMessage text={MessageText.NOT_CORRECT_FORM} />;
    }

    if (isSubmiting) {
      return <SignInMessage text={MessageText.SUBMITING} />;
    }

    if (isSubmitingError) {
      return <SignInMessage text={MessageText.SUBMITING_ERROR} />;
    }

    return null;
  };

  const handleLoginInput = (evt) => {
    evt.preventDefault();
    setIsFormCorrect(true);
    setIsSubmitingError(false);

    const loginValue = loginRef.current.value;

    if (!checkIsLoginValid(loginValue)) {
      setIsLoginValid(false);
      return;
    }

    setIsLoginValid(true);
  };

  const handlePasswordInput = (evt) => {
    evt.preventDefault();
    setIsFormCorrect(true);
    setIsSubmitingError(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const loginValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (!checkIsFormCorrect(loginValue, passwordValue) || !checkIsLoginValid(loginValue)) {
      setIsFormCorrect(false);
      return;
    }

    setIsSubmiting(true);
    setIsSubmitingError(false);

    dispatch(login({email: loginValue, password: passwordValue}))
      .catch(() => {
        setIsSubmiting(false);
        setIsSubmitingError(true);
      });
  };

  return (
    <div className="sign-in user-page__content">
      <form onSubmit={handleSubmit} action="#" className="sign-in__form">
        {getSignInMessage()};
        {/* {!isLoginValid && <SignInMessage text={MessageText.NOT_CORRECT_EMAIL} />}
        {!isFormCorrect && <SignInMessage text={MessageText.NOT_FORM_CORRECT} />}
        {isSubmiting && <SignInMessage text={MessageText.Submiting} />}
        {isSubmitingError && <SignInMessage text={MessageText.Submiting_ERROR} />} */}
        {/* {!isLoginValid &&
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
        } */}

        <div className="sign-in__fields">
          <div className={isLoginValid ? `sign-in__field` : `sign-in__field--error`}>
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
            disabled={isSubmiting || !isLoginValid}
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
