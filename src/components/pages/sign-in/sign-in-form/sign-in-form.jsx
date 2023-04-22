import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import SignInMessage from '../sign-in-message/sign-in-message';
import {login} from '../../../../store/api-actions';
import {EMAIL_REGEXP} from '../../../../const';

const TIME_OUT = 5000;

const MessageText = {
  NOT_VALID_LOGIN: `Please enter a valid email address`,
  NOT_CORRECT_FORM: `We can\’t recognize this email <br /> and password combination. Please try again.`,
  SUBMITING: `Submiting...`,
  SUBMITING_ERROR: `Error authorization!`,
};

const FormState = {
  BASE: `BASE`,
  NOT_VALID_LOGIN: `NOT_VALID_LOGIN`,
  NOT_CORRECT_FORM: `NOT_CORRECT_FORM`,
  SUBMITING: `SUBMITING`,
  SUBMITING_ERROR: `SUBMITING_ERROR`,
};

const getSignInMessage = (formState) => {
  switch (formState) {
    case FormState.BASE:
      return null;
    case FormState.NOT_VALID_LOGIN:
      return <SignInMessage text={MessageText.NOT_VALID_LOGIN} />;
    case FormState.NOT_CORRECT_FORM:
      return <SignInMessage text={MessageText.NOT_CORRECT_FORM} />;
    case FormState.SUBMITING:
      return <SignInMessage text={MessageText.SUBMITING} />;
    case FormState.SUBMITING_ERROR:
      return <SignInMessage text={MessageText.SUBMITING_ERROR} />;
    default:
      throw new Error(`Unknown switch case expression: '${formState}'!`);
  }
};

const SignInForm = () => {
  const [formState, setFormState] = useState(FormState.BASE);
  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const checkIsLoginValid = (loginValue) => (EMAIL_REGEXP.test(loginValue) || loginValue === ``);
  const checkIsFormCorrect = (loginValue, passwordValue) => (loginValue !== `` && passwordValue !== ``);

  const handleLoginInput = (evt) => {
    evt.preventDefault();

    const loginValue = loginRef.current.value;

    const state = checkIsLoginValid(loginValue)
      ? FormState.BASE
      : FormState.NOT_VALID_LOGIN;

    setFormState(state);
  };

  const handlePasswordInput = (evt) => {
    evt.preventDefault();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const loginValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (!checkIsFormCorrect(loginValue, passwordValue) || !checkIsLoginValid(loginValue)) {
      setFormState(FormState.NOT_CORRECT_FORM);
      return;
    }

    setFormState(FormState.SUBMITING);
    dispatch(login({email: loginValue, password: passwordValue}))
      .catch(() => {
        setFormState(FormState.SUBMITING_ERROR);

        const state = checkIsLoginValid(loginValue)
          ? FormState.BASE
          : FormState.NOT_VALID_LOGIN;

        setTimeout(() => setFormState(state), TIME_OUT);
      });
  };

  return (
    <div className="sign-in user-page__content">
      <form onSubmit={handleSubmit} action="#" className="sign-in__form">
        {getSignInMessage(formState)}

        <div className="sign-in__fields">
          {/* <div className={isLoginValid ? `sign-in__field` : `sign-in__field--error`}> */}
          <div className={formState === FormState.NOT_VALID_LOGIN ? `sign-in__field--error` : `sign-in__field`}>
            <input
              ref={loginRef}
              // disabled={isSubmiting}
              disabled={formState === FormState.SUBMITING}
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
              // disabled={isSubmiting}
              disabled={formState === FormState.SUBMITING}
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
            // disabled={isSubmiting || !isLoginValid}
            disabled={formState === FormState.SUBMITING || formState === FormState.NOT_VALID_LOGIN}
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
