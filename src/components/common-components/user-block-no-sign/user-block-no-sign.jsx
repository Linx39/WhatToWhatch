import React from 'react';
import {Link} from 'react-router-dom';
import {Patch} from '../../../const';

const UserBlockNoSign = () => {
  return (
    <div className="user-block">
      <Link to={Patch.LOGIN} className="user-block__link">Sign in</Link>
    </div>
  );
};

export default UserBlockNoSign;
