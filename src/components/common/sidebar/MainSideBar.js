import UserPanel from "./UserPanel";
import SearchForm from "./SearchForm";
import NavigationMenu from "./NavigationMenu";
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userprofileActions from '../../../actions/Message-Notification-Tasks_Actions';

class MainSideBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <section className="sidebar">
                <UserPanel userprofile={this.props.userprofile.userprofile}></UserPanel>
                <SearchForm></SearchForm>
                <NavigationMenu></NavigationMenu>
            </section>
        );
    };
}

function mapStateToProps(state, ownProps) {
    return {
        userprofile: state.userprofile
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userprofileActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSideBar);