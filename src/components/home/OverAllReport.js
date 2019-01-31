import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homepageActions from "../../actions/HomePageActions"
import LocationWiseReport from "./LocationWiseReport";
import Chat from "./Chat";
import LatestMembers from "./LatestMembers";
import Report30Days from "./Report30Days";

class OverAllReport extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="box box-success">
                        <div className="box-header with-border">
                            <h3 className="box-title">{this.props.visitorreport.visitorreport.reporttitle}</h3>
                            <div className="box-tools pull-right">
                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                            </div>
                        </div>
                        <div className="box-body no-padding">
                            <LocationWiseReport visitorreport={this.props.visitorreport.visitorreport}></LocationWiseReport>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Chat chatdata={this.props.chatdata}></Chat>
                        </div>
                        <div className="col-md-6">
                            <LatestMembers latestmembers={this.props.latestmembers}></LatestMembers>
                        </div>
                    </div>
                </div>
                <Report30Days report30days={this.props.report30days} browserusage={this.props.browserusage}></Report30Days>
            </div>
        );
    }
};

function mapStateToProps(state, ownProps) {
    return {
        visitorreport: state.visitorreport,
        chatdata: state.chatdata,
        latestmembers: state.latestmembers,
        report30days: state.report30days,
        browserusage: state.browserusage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(homepageActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverAllReport);


