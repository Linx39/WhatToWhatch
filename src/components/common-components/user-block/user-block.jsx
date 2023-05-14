import React from 'react';
import {useSelector} from 'react-redux';

import UserBlockAvatar from '../user-block-avatar/user-block-avatar';
import UserBlockSignIn from '../user-block-sign-in/user-block-sign-in';
import {getAuthorizationStatus} from '../../../store/user-data/selectors';
import {AuthorizationStatus} from '../../../const';

const UserBlock = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <>
      {authorizationStatus === AuthorizationStatus.AUTH
        ? <UserBlockAvatar />
        : <UserBlockSignIn />
      }
    </>
  );
};

export default UserBlock;
