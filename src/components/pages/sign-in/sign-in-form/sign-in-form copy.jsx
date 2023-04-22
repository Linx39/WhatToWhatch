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

  // if (!isLoginValid) {
  //   return <SignInMessage text={MessageText.NOT_VALID_LOGIN} />;
  // }

  // if (!isFormCorrect) {
  //   return <SignInMessage text={MessageText.NOT_CORRECT_FORM} />;
  // }

  // if (isSubmiting) {
  //   return <SignInMessage text={MessageText.SUBMITING} />;
  // }

  // if (isSubmitingError) {
  //   return <SignInMessage text={MessageText.SUBMITING_ERROR} />;
  // }

  // return null;
};

const SignInForm = () => {
  // const [isLoginValid, setIsLoginValid] = useState(true);
  // const [isFormCorrect, setIsFormCorrect] = useState(true);
  // const [isSubmiting, setIsSubmiting] = useState(false);
  // const [isSubmitingError, setIsSubmitingError] = useState(false);
  const [formState, setFormState] = useState(FormState.BASE);
  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const checkIsLoginValid = (loginValue) => (EMAIL_REGEXP.test(loginValue) || loginValue === ``);
  const checkIsFormCorrect = (loginValue, passwordValue) => (loginValue !== `` && passwordValue !== ``);

  const handleLoginInput = (evt) => {
    evt.preventDefault();
    // setIsFormCorrect(true);
    // setIsSubmitingError(false);
    // setFormState(FormState.BASE);

    const loginValue = loginRef.current.value;

    const state = checkIsLoginValid(loginValue)
      ? FormState.BASE
      : FormState.NOT_VALID_LOGIN;

    setFormState(state);

    // if (!checkIsLoginValid(loginValue)) {
    //   setFormState(FormState.NOT_VALID_LOGIN);
    //   // setIsLoginValid(false);
    //   return;
    // }

    // setFormState(FormState.BASE);
    // setIsLoginValid(true);
  };

  const handlePasswordInput = (evt) => {
    evt.preventDefault();

    // const loginValue = loginRef.current.value;

    // const state = checkIsLoginValid(loginValue)
    //   ? FormState.BASE
    //   : FormState.NOT_VALID_LOGIN;

    // setFormState(state);
    // if (!checkIsLoginValid(loginValue)) {
    //   setFormState(FormState.NOT_VALID_LOGIN);
    //   return;
    // }
    // setFormState(FormState.BASE);
    // setIsFormCorrect(true);
    // setIsSubmitingError(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const loginValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (!checkIsFormCorrect(loginValue, passwordValue) || !checkIsLoginValid(loginValue)) {
      setFormState(FormState.NOT_CORRECT_FORM);
      // setIsFormCorrect(false);
      return;
    }

    // setIsSubmiting(true);
    // setIsSubmitingError(false);
    setFormState(FormState.SUBMITING);
    dispatch(login({email: loginValue, password: passwordValue}))
      .catch(() => {
        // const prevFormState = formState;
        setFormState(FormState.SUBMITING_ERROR);
        // const loginValue = loginRef.current.value;

        const state = checkIsLoginValid(loginValue)
          ? FormState.BASE
          : FormState.NOT_VALID_LOGIN;

        setTimeout(() => setFormState(state), TIME_OUT);
        // setIsSubmiting(false);
        // setIsSubmitingError(true);
      });
  };

  return (
    <div className="sign-in user-page__content">
      <form onSubmit={handleSubmit} action="#" className="sign-in__form">
        {getSignInMessage(formState)}
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
