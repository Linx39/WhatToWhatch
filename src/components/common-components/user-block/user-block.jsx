import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';

const UserBlock = () => {
  const {user} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const onAvatarClick = () => {
    dispatch(redirectToRoute(Patch.MY_LIST));
  };

  const {avatarUrl} = user;

  return (
    <div className="user-block">
      <div onClick={onAvatarClick} className="user-block__avatar">
        <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
      </div>
    </div>
  );
};

export default UserBlock;
