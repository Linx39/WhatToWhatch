import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {logout} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';

const UserBlock = () => {
  const {user} = useSelector((state) => state.USER);

  const dispatch = useDispatch();
  const onRedirectToRoute = (url) => dispatch(redirectToRoute(url));
  const onLogout = () => dispatch(logout());

  const {avatarUrl} = user;

  const handleOnAvatarClick = () => onRedirectToRoute(Patch.MY_LIST);

  return (
    <div className="user-block">
      <div onClick={handleOnAvatarClick} className="user-block__avatar">
        <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
      </div>
      {/* удалить */}
      <div>
        <span onClick={onLogout}>Logout</span>
      </div>
    </div>
  );
};

export default UserBlock;
