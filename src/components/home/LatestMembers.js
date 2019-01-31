import React, { PropTypes } from 'react';

const LatestMembers = ({ latestmembers }) => {
    var i = 0;
    var createListOfMembers = function (member) {
        return (
            <li key={i++}>
                <img src={member.memberimage} alt="User Image"></img>
                <a className="users-list-name" href="#">{member.name}</a>
                <span className="users-list-date">{member.when}</span>
            </li>
        )
    };
    return (
        <div className="box box-danger">
            <div className="box-header with-border">
                <h3 className="box-title">{latestmembers.latestmembers.widgettitle}</h3>
                <div className="box-tools pull-right">
                    <span className="label label-danger">{latestmembers.latestmembers.newmembercount} New Members</span>
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i>
                    </button>
                </div>
            </div>
            <div className="box-body no-padding">
                <ul className="users-list clearfix">
                    {latestmembers.latestmembers.newmemberlist.map(createListOfMembers, this)}
                </ul>
            </div>
            <div className="box-footer text-center">
                <a href="javascript:void(0)" className="uppercase">View All Users</a>
            </div>
        </div>
    );
};
module.exports = LatestMembers;


