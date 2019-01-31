import React, { PropTypes } from 'react';

const NotificationList = ({ notifications }) => {
    var createNotificationList = function (notification) {
        return (
            <li data-notifyid={notification.id} key={notification.id}>
                <a href="#">
                    <i className="fa fa-users text-aqua"></i> {notification.notificationText}
                </a>
            </li>
        )
    };
    return (
        <li className="dropdown notifications-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o"></i>
                <span className="label label-warning">{notifications.notifications.notificationsCount}</span>
            </a>
            <ul className="dropdown-menu">
                <li className="header">You have {notifications.notifications.notificationsCount} notifications</li>
                <li>
                    <ul className="menu">
                        {notifications.notifications.notificationsList.map(createNotificationList, this)}
                    </ul>
                </li>
                <li className="footer"><a href="#">View all</a></li>
            </ul>
        </li>
    );
};
module.exports = NotificationList;


