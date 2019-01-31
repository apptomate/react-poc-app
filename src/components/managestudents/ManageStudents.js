import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as managestudentsActions from "../../actions/ManageStudentsActions"
import StudentsDataTable from "./StudentsDataTable";

class ManageStudents extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Manage Students
                        <small>CRUD Operation</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Students</a></li>
                        <li className="active">Manage Students</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <StudentsDataTable students={this.props.students}></StudentsDataTable>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        students: state.students
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(managestudentsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageStudents);
