import React from 'react';
import PropTypes from 'prop-types';

import './sign-in-form-message.css';

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
