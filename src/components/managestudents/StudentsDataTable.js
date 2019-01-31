import React, { Component, PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as managestudentsActions from "../../actions/ManageStudentsActions";
import Alert from 'react-s-alert';

var currentProps;

function onRowSelect(row, isSelected) {
  console.log(row);
  console.log(`selected: ${isSelected}`);
}

function onSelectAll(isSelected) {
  console.log(`is select all: ${isSelected}`);
}

function onAfterSaveCell(row, cellName, cellValue) {
  var studentinfo = {
    student:
      {
        id: row.id,
        name: row.name,
        email: row.email,
        dob: row.dob,
        phone: row.phone,
        gender: row.gender
      }
  };
  Alert.info(`Data Successfully saved! ${cellName} is set to ${cellValue}`, {
    position: 'top-right',
    offset: 100,
    effect: 'jelly',
    timeout: 2500
  });
  currentProps.actions.editStudent(studentinfo);
}

function onAfterTableComplete() {
  console.log('Table render complete.');
}

function onAfterInsertRow(row) {
  var studentinfo = {
    student:
      {
        name: row.name,
        email: row.email,
        dob: row.dob,
        phone: row.phone,
        gender: row.gender
      }
  };
  Alert.info(`Data Successfully added for the user ${row.name}`, {
    position: 'top-right',
    offset: 100,
    effect: 'jelly',
    timeout: 2500
  });
  currentProps.actions.addStudent(studentinfo);
}

const selectRowProp = {
  mode: 'radio',
  clickToSelect: true,
  selected: [], // default select on table
  bgColor: 'rgb(238, 193, 213)',
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
};

function genderFormatter(cell, row) {
  if (cell === 'Male') return '<font color="red">' + cell + '</font>';
  else if (cell === 'Female') return '<font color="orange">' + cell + '</font>';
  else return cell;
}

function phoneFormatter(cell, row) {
  return '<i class="glyphicon glyphicon-phone"></i> +91-' + cell;
}

function trClassNameFormat(rowData, rIndex) {
  return rIndex % 3 === 0 ? 'third-tr' : '';
}
function nameValidator(value) {
  if (!value) {
    return 'Student Name is required!';
  } else if (value.length < 3) {
    return 'Student Name length must great 3 char';
  }
  return true;
}
function genderValidator(value) {
  if (!value) {
    return 'Gender is required!';
  }
  return true;
}

function onAfterDeleteRow(rowKeys) {
  var studentinfo = {
    student:
      {
        id: rowKeys[0]
      }
  };
  Alert.info(`Data Successfully deleted for the user ${rowKeys[0]}`, {
    position: 'top-right',
    offset: 100,
    effect: 'jelly',
    timeout: 2500
  });
  currentProps.actions.deleteStudent(studentinfo);
};
const options = {
  paginationShowsTotal: true,
  sortName: 'name',  // default sort column name
  sortOrder: 'asc',
  afterTableComplete: onAfterTableComplete,
  afterDeleteRow: onAfterDeleteRow,
  afterInsertRow: onAfterInsertRow
};

class StudentsDataTable extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    currentProps = {...this.props};
    var products =  this.props.students.studentslist;

    return (
      <div>
        <Alert stack={{ limit: 2 }} />
        <BootstrapTable data={products}
          trClassName={trClassNameFormat}
          selectRow={selectRowProp}
          cellEdit={cellEditProp}
          options={options}
          exportCSV={true}
          insertRow
          deleteRow
          search
          columnFilter
          hover
          pagination>
          <TableHeaderColumn hidden dataField='id' dataAlign='center' dataSort isKey autoValue>Student ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' className='good' dataSort
            editable={{ type: 'textbox', validator: nameValidator }}>Student Name</TableHeaderColumn>
          <TableHeaderColumn dataField='email' className='good' dataSort
            editable={{ type: 'textarea' }}>Student Email</TableHeaderColumn>
          <TableHeaderColumn dataField='dob' className='good' dataSort
            editable={{ type: 'date' }}>Student DOB</TableHeaderColumn>
          <TableHeaderColumn dataField='phone' className='good' dataSort
            dataFormat={phoneFormatter}
            editable={{ type: 'textbox' }}>Student Phone</TableHeaderColumn>
          <TableHeaderColumn dataField='gender' className='good' dataSort
            dataFormat={genderFormatter}
            editable={{
              type: 'select',
              options: { values: ['Male', 'Female'] },
              validator: genderValidator
            }}>Student Gender</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
};
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentsDataTable);


