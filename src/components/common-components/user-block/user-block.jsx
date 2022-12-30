import React from 'react';
import PropTypes from 'prop-types';

const UserBlock = ({onAvatarClick}) => {
  const handleMouseClick = onAvatarClick;

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img
          onClick={handleMouseClick}
          src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </div>
  );
};

UserBlock.propTypes = {
  onAvatarClick: PropTypes.func,
};

export default UserBlock;
