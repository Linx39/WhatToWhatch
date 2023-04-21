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
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isFormCorrect, setIsFormCorrect] = useState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isErrorSubmiting, setIsErrorSubmiting] = useState(false);
  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const isEmailValid = () => EMAIL_REGEXP.test(loginRef.current.value);
  const isFormValid = () => (loginRef.current.value === `` || passwordRef.current.value === ``);

  const handleInput = (evt) => {
    evt.preventDefault();

    const loginValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (!isEmailValid() && loginValue !== ``) {
      setIsEmailCorrect(false);
      return;
    }

    // if (loginValue === `` || passwordValue === ``) {
    //   setIsFormCorrect(true);
    //   return;
    // }

    setIsEmailCorrect(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmiting(true);

    if (isFormValid()) {
      setIsFormCorrect(false);
      return;
    }

    if (!isEmailValid(loginValue)) {
      return;
    }

    console.log ('sign');
    dispatch(login({email: loginValue, password: passwordValue}))
      .catch(() => {
        setIsSubmiting(false);
        setIsErrorSubmiting(true);
      });
  };

  return (
    <div className="sign-in user-page__content">
      <form onSubmit={handleSubmit} action="#" className="sign-in__form">
        {/* {!isEmailCorrect && <SignInMessage text={MessageText.NOT_EMAIL_CORRECT} />}
        {!isFormCorrect && <SignInMessage text={MessageText.NOT_FORM_CORRECT} />}
        {isFetching && <SignInMessage text={MessageText.FETCHING} />}
        {isFetchingError && <SignInMessage text={MessageText.FETCHING_ERROR} />} */}
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
        {isSubmiting &&
          <div className="sign-in__message">
            <p>Loading...</p>
          </div>
        }
        {isErrorSubmiting &&
          <div className="sign-in__message">
            <p>Error authorization!</p>
          </div>
        }

        <div className="sign-in__fields">
          <div className={isEmailCorrect ? `sign-in__field` : `sign-in__field--error`}>
            <input
              ref={loginRef}
              disabled={isSubmiting}
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
              disabled={isSubmiting}
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
            disabled={!isFormCorrect || !isEmailCorrect || isSubmiting}
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
