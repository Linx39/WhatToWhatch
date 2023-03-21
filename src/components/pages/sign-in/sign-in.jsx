import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../common-components/header/header';
import Footer from '../../common-components/footer/footer';
import ErrorPage from '../info-page/error-page/error-page';
import SignInForm from './sign-in-form/sign-in-form';

import {redirectToRoute} from '../../../store/action';
import {AuthorizationStatus, Patch, AdditionalClassName} from '../../../const';

const SignIn = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const [isFetchingError, setIsFetchingError] = useState(false);

  const handleFetchingError = (value) => setIsFetchingError(value);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(redirectToRoute((Patch.MAIN)));
    }
  }, [authorizationStatus]);

  if (isFetchingError) {
    return (
      <ErrorPage />
    );
  }

  return (
    <div className="user-page">
      <Header additionalClassName={AdditionalClassName.HEADER.USER_PAGE} isUserBlock={false}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <SignInForm onFetchingError={handleFetchingError}/>

      <Footer />
    </div>
  );
};

export default SignIn;
