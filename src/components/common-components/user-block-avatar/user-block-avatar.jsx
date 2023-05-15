import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {logout} from '../../../store/api-actions';
import {getUser} from '../../../store/user-data/selectors';
import {redirectToRoute} from '../../../store/action';
import {AppRoute} from '../../../const';
import './logout-button.css';

const UserBlockAvatar = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleOnAvatarClick = () => dispatch(redirectToRoute((AppRoute.MY_LIST)));
  const handleLogout = () => dispatch(logout());

  const {avatarUrl} = user;

  return (
    <>
      <button className='btn logout__button' onClick={handleLogout} type='button'>
        <span>Logout</span>
      </button>

      <div className="user-block">
        <div onClick={handleOnAvatarClick} className="user-block__avatar">
          <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    </>

  );
};

export default UserBlockAvatar;
