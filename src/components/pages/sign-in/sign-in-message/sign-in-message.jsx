import React from 'react';
import PropTypes from 'prop-types';

const SignInFormMessage = ({text}) => {
  return (
    <div className="sign-in__message">
      <p>{text}</p>
    </div>
  );
};

SignInFormMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SignInFormMessage;
