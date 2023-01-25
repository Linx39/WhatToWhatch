import React from 'react';
import {useDispatch} from 'react-redux';

import {redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';

const UserBlock = () => {
  const dispatch = useDispatch();

  const onAvatarClick = () => {
    dispatch(redirectToRoute(Patch.MY_LIST));
  };

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img
          onClick={onAvatarClick}
          src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </div>
  );
};

export default UserBlock;
