import React, { PropTypes } from 'react';

const UserPanel = ({ userprofile }) => {
  return (
    <div className="user-panel">
      <div className="pull-left image">
        <img src={userprofile.userImage} className="img-circle" alt="User Image"></img>
      </div>
      <div className="pull-left info">
        <p>{userprofile.userName}</p>
        <a href="#"><i className="fa fa-circle text-success"></i> {userprofile.defaultStatus}</a>
      </div>
    </div>
  );
};
module.exports = UserPanel;


