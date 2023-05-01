import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {logout} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';

const UserBlockAvatar = () => {
  const {user} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const handleOnAvatarClick = () => dispatch(redirectToRoute((Patch.MY_LIST)));
  const handleLogout = () => dispatch(logout());

  const {avatarUrl} = user;

  return (
    <div className="user-block">
      <div onClick={handleOnAvatarClick} className="user-block__avatar">
        <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
      </div>

      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserBlockAvatar;