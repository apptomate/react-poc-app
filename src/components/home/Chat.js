import React, { PropTypes } from 'react';

const Chat = ({ chatdata }) => {
    var i = 0;
    var createLiveChatList = function (chattext) {
        return (
            <div key={i++} className={chattext.issender == 'true' ? "direct-chat-msg" : "direct-chat-msg right"}>
                <div className="direct-chat-info clearfix">
                    <span className={chattext.issender == 'true' ? "direct-chat-name pull-left" : "direct-chat-name pull-right"}>{chattext.senderreceiver}</span>
                    <span className={chattext.issender == 'true' ? "direct-chat-timestamp pull-right" : "direct-chat-timestamp pull-left"} >{chattext.msgtimestamp}</span>
                </div>
                <img className="direct-chat-img" src={chattext.userimg} alt="message user image"></img>
                <div className="direct-chat-text">
                    {chattext.chattext}
                </div>
            </div>
        )
    };
    return (
        <div className="box box-warning direct-chat direct-chat-warning">
            <div className="box-header with-border">
                <h3 className="box-title">{chatdata.chatdata.chattitle}</h3>
                <div className="box-tools pull-right">
                    <span data-toggle="tooltip" title="3 New Messages" className="badge bg-yellow">3</span>
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Contacts"
                        data-widget="chat-pane-toggle">
                        <i className="fa fa-comments"></i></button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i>
                    </button>
                </div>
            </div>
            <div className="box-body">
                <div className="direct-chat-messages">
                    {chatdata.chatdata.directchatmsg.conversation.map(createLiveChatList, this)}
                </div>
            </div>
            <div className="box-footer">
                <form action="#" method="post">
                    <div className="input-group">
                        <input type="text" name="message" placeholder="Type Message ..." className="form-control"></input>
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-warning btn-flat">Send</button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
};
module.exports = Chat;




