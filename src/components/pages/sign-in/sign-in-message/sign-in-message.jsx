import React from 'react';
import PropTypes from 'prop-types';

const SignInMessage = (text) => {
  return (
    <div className="sign-in__message" key={text}>
      <p>{text}</p>
    </div>
  );
};

SignInMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SignInMessage;
