import React, { PropTypes } from 'react';

const UserProfileHeader = ({ userprofile }) => {
    return (
        <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src={userprofile.userImage} className="user-image" alt="User Image"></img>
                <span className="hidden-xs">Welcome !!!</span>
            </a>
            <ul className="dropdown-menu">
                <li className="user-header">
                    <img src={userprofile.userImage} className="img-circle" alt="User Image"></img>
                    <p>
                        {userprofile.userName}
                        <small>{userprofile.designation}</small>
                    </p>
                </li>
                <li className="user-footer">
                    <div className="pull-left">
                        <a href="#" className="btn btn-default btn-flat" data-userid={userprofile.userId}>Profile</a>
                    </div>
                    <div className="pull-right">
                        <a href="#" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                </li>
            </ul>
        </li>
       
    );
};
module.exports = UserProfileHeader;


