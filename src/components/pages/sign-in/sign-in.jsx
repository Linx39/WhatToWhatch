import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../common-components/header/header';
import Footer from '../../common-components/footer/footer';
import Error from '../info-page/error/error';
import SignInForm from './sign-in-form/sign-in-form';

import {redirectToRoute} from '../../../store/action';
import {AuthorizationStatus, Patch, AdditionalClassName} from '../../../const';

const SignIn = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const [isFetchingError, setIsFetchingError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(redirectToRoute((Patch.MAIN)));
    }
  }, [authorizationStatus]);

  if (isFetchingError) {
    return (
      <Error />
    );
  }

  return (
    <div className="user-page">
      <Header additionalClassName={AdditionalClassName.HEADER.USER_PAGE} isUserBlock={false}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <SignInForm onFetchingError={setIsFetchingError}/>

      <Footer />
    </div>
  );
};

export default SignIn;
