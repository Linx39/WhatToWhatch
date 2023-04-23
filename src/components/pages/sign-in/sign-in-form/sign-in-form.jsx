import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';

import SignInMessage from '../sign-in-message/sign-in-message';
import {login} from '../../../../store/api-actions';
import {redirectToRoute} from '../../../../store/action';
import {Patch, ResponseStatus, EMAIL_REGEXP} from '../../../../const';

const TIME_OUT = 2000;

const FormState = {
  DEFAULT: `Default`,
  NOT_VALID_LOGIN: `Not valid login`,
  NOT_CORRECT_FORM: `Not correct form`,
  SUBMITING: `Submiting`,
  SUBMITING_SUCCESS: `Submiting Success`,
  AUTHORIZATION_ERROR: `Authorization error`,
  SERVER_ERROR: `Server error. Please reload the page.`,
};

const MessageText = {
  [FormState.NOT_VALID_LOGIN]: `Please enter a valid email address`,
  [FormState.NOT_CORRECT_FORM]: `We can\’t recognize this email\n and password combination. Please try again.`,
  [FormState.SUBMITING]: `Authorization process, please wait...`,
  [FormState.SUBMITING_SUCCESS]: `Authorization successful!`,
  [FormState.AUTHORIZATION_ERROR]: `Authorization error!`,
  [FormState.SERVER_ERROR]: `Server error!`,
};

const SignInForm = () => {
  const [formState, setFormState] = useState(FormState.DEFAULT);
  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const checkIsLoginValid = (loginValue) => (EMAIL_REGEXP.test(loginValue) || loginValue === ``);
  const checkIsFormCorrect = (loginValue, passwordValue) => (loginValue !== `` && passwordValue !== ``);

  const handleLoginInput = (evt) => {
    evt.preventDefault();

    const loginValue = loginRef.current.value;
    const state = checkIsLoginValid(loginValue) ? FormState.DEFAULT : FormState.NOT_VALID_LOGIN;

    setFormState(state);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const loginValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (!checkIsFormCorrect(loginValue, passwordValue)) {
      setFormState(FormState.NOT_CORRECT_FORM);
      return;
    }

    const prevFormState = formState;
    setFormState(FormState.SUBMITING);

    dispatch(login({email: loginValue, password: passwordValue}))
    .then((error) => {
      if (!error) {
        setFormState(FormState.SUBMITING_SUCCESS);
        setTimeout(() => dispatch(redirectToRoute((Patch.MAIN))), TIME_OUT);
        return;
      }

      const errorState = error === ResponseStatus.UNAUTHORIZED ? FormState.AUTHORIZATION_ERROR : FormState.SERVER_ERROR;
      setFormState(errorState);
      setTimeout(() => setFormState(prevFormState), TIME_OUT);
    });
  };

  return (
    <div className="sign-in user-page__content">
      <form onSubmit={handleSubmit} action="#" className="sign-in__form">
        {formState !== FormState.DEFAULT && <SignInMessage text={MessageText[formState]} />}

        <div className="sign-in__fields">
          <div className={formState === FormState.NOT_VALID_LOGIN ? `sign-in__field--error` : `sign-in__field`}>
            <input
              ref={loginRef}
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
              disabled={formState === FormState.SUBMITING}
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
