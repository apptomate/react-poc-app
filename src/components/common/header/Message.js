import React, { PropTypes } from 'react';

const MessageList = ({ messages }) => {
    var createMessageList = function (message) {
        return (
            <li data-msgid={message.id} key={message.id}>
                <a href="#">
                    <div className="pull-left">
                        <img src={message.msgImg} className="img-circle" alt="User Image"></img>
                    </div>
                    <h4>
                        {message.title}
                        <small><i className="fa fa-clock-o"></i>{message.timeReceived}</small>
                    </h4>
                    <p>{message.msgText}</p>
                </a>
            </li>
        )
    };
    return (
        <li className="dropdown messages-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-envelope-o"></i>
                <span className="label label-success">{messages.messages.messageCount}</span>
            </a>
            <ul className="dropdown-menu">
                <li className="header">You have {messages.messages.messageCount} messages</li>
                <li>
                    <ul className="menu">
                        {messages.messages.messageList.map(createMessageList, this)}
                    </ul>
                </li>
                <li className="footer"><a href="#">See All Messages</a></li>
            </ul>
        </li>
    );
};
module.exports = MessageList;


