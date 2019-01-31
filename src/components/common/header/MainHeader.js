import MessageList from "./Message";
import NotificationList from "./Notification";
import TaskList from "./Task";
import UserProfileHeader from "./UserProfile";
import React, { Component ,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as messageActions from '../../../actions/Message-Notification-Tasks_Actions';

class MainHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <a href="#/Home" className="logo">
                    <span className="logo-mini"><i className="fa fa-user"></i></span>
                    <span className="logo-lg"><b>Admin</b></span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                        <MessageList messages={this.props.messages}></MessageList>
                        <NotificationList notifications={this.props.notifications}></NotificationList>
                        <TaskList tasks={this.props.tasks}></TaskList>
                        <UserProfileHeader userprofile={this.props.userprofile.userprofile}></UserProfileHeader>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };
}


function mapStateToProps(state, ownProps) {
    return {
        messages: state.messages,
        notifications: state.notifications,
        tasks: state.tasks, 
        userprofile: state.userprofile
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(messageActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);