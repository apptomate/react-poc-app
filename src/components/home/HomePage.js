import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homepageActions from "../../actions/HomePageActions"
import InfoBoxesList from "./InfoBoxes";
import MonthlyReport from "./MonthlyReport";
import OverAllReport from "./OverAllReport";

const css = `.content {padding-left:10px}`;
class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Dashboard
                        <small>Demo Version</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">Dashboard</li>
                    </ol>
                </section>
                <style>{css}</style>
                <section className="content">
                    <InfoBoxesList infoboxes={this.props.infoboxes}></InfoBoxesList>
                    <MonthlyReport monthlyreport={this.props.monthlyreport}></MonthlyReport>
                    <OverAllReport></OverAllReport>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        infoboxes: state.infoboxes,
        monthlyreport: state.monthlyreport
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(homepageActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
