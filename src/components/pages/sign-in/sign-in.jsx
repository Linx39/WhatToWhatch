import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../common-components/header/header';
import Footer from '../../common-components/footer/footer';
import SignInForm from './sign-in-form/sign-in-form';

import {getAuthorizationStatus} from '../../../store/user-data/selectors';
import {redirectToRoute} from '../../../store/action';
import {AuthorizationStatus, AppRoute, AdditionalClassName} from '../../../const';

const SignIn = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(redirectToRoute((AppRoute.MAIN)));
    }
  }, []);

  return (
    <div className="user-page">
      <Header additionalClassName={AdditionalClassName.HEADER.USER_PAGE} isUserBlock={false}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <SignInForm />

      <Footer />
    </div>
  );
};

export default SignIn;
