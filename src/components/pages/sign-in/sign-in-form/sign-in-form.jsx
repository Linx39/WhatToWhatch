import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';

import SignInFormMessage from '../sign-in-form-message/sign-in-form-message';
import {login} from '../../../../store/api-actions';
import {redirectToRoute} from '../../../../store/action';
import {Patch, ResponseStatus, EMAIL_REGEXP} from '../../../../const';

const TIME_OUT = 1000;

const FormState = {
  DEFAULT: `Default`,
  INVALID_LOGIN: `Invalid login`,
  INCORRECT_FORM: `Incorrect form`,
  SUBMITING: `Submiting`,
  SUBMITING_SUCCESS: `Submiting success`,
  AUTHORIZATION_ERROR: `Authorization error`,
  SERVER_ERROR: `Server error`,
};

const MessageText = {
  [FormState.INVALID_LOGIN]: `Please enter a valid email address`,
  [FormState.INCORRECT_FORM]: `Login and password can\’t be empty`,
  [FormState.SUBMITING]: `Authorization process, please wait...`,
  [FormState.SUBMITING_SUCCESS]: `Authorization successful!`,
  [FormState.AUTHORIZATION_ERROR]: `We can\’t recognize this email \n and password combination. Please try again.`,
  [FormState.SERVER_ERROR]: `Server error!  Please reload the page!`,
};

const SignInForm = () => {
  const [formState, setFormState] = useState(FormState.DEFAULT);
  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const isLoginValid = (loginValue) => (EMAIL_REGEXP.test(loginValue) || loginValue === ``);
  const isFormCorrect = (loginValue, passwordValue) => (loginValue !== `` && passwordValue !== ``);

  const handleInput = (evt) => {
    evt.preventDefault();

    const loginValue = loginRef.current.value;
    const state = isLoginValid(loginValue)
      ? FormState.DEFAULT
      : FormState.INVALID_LOGIN;

    setFormState(state);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const loginValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (!isFormCorrect(loginValue, passwordValue)) {
      setFormState(FormState.INCORRECT_FORM);
      return;
    }

    setFormState(FormState.SUBMITING);

    dispatch(login({email: loginValue, password: passwordValue}))
    .then((errorResponseStatus) => {
      if (errorResponseStatus) {
        const errorFormState = errorResponseStatus === ResponseStatus.BAD_REQUEST
          ? FormState.AUTHORIZATION_ERROR
          : FormState.SERVER_ERROR;

        setFormState(errorFormState);

        return;
      }

      setFormState(FormState.SUBMITING_SUCCESS);
      setTimeout(() => dispatch(redirectToRoute((Patch.MAIN))), TIME_OUT);
    });
  };

  const isInputDisabled =
    formState === FormState.SUBMITING ||
    formState === FormState.SUBMITING_SUCCESS;

  const isSignInButtonDisabled =
    formState === FormState.INVALID_LOGIN || isInputDisabled;

  return (
    <div className="sign-in user-page__content">
      <form onSubmit={handleSubmit} action="#" className="sign-in__form">
        {formState !== FormState.DEFAULT && <SignInFormMessage text={MessageText[formState]} />}

        <div className="sign-in__fields">
          <div className={formState === FormState.INVALID_LOGIN ? `sign-in__field--error` : `sign-in__field`}>
            <input
              ref={loginRef}
              disabled={isInputDisabled}
              onInput={handleInput}
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
              disabled={isInputDisabled}
              onInput={handleInput}
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
            disabled={isSignInButtonDisabled}
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
