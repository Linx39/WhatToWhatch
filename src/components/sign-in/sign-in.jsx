import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../common-components/header/header';
import Footer from '../common-components/footer/footer';
import SignInForm from './sign-in-form/sign-in-form';

import {redirectToRoute} from '../../store/action';
import {AuthorizationStatus, Patch, AdditionalClass} from '../../const';

const SignIn = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

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

      <SignInForm />

      <Footer />
    </div>
  );
};

export default SignIn;
