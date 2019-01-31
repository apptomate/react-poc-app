import React, { PropTypes } from 'react';

const NavigationMenu = () => {
    return (
        <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>
        <li className="active treeview menu-open">
          <a href="#">
            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li className="active"><a href="#/Home"> Admin Dashboard</a></li>
          </ul>
        </li> 
        <li className="treeview">
          <a href="#">
            <i className="fa fa-cubes"></i>
            <span>Student</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="#/ManageStudents"><i className="fa fa-circle-o"></i> Manage Student</a></li>
          </ul>
        </li>       
        <li>
          <a href="#/Home">
            <i className="fa fa-users"></i> <span>Social Media</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-green">new</small>
            </span>
          </a>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-cloud"></i>
            <span>Course</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="#/Home"><i className="fa fa-circle-o"></i> Technical Courses</a></li>
            <li><a href="#/Home"><i className="fa fa-circle-o"></i> Non-Technical Courses</a></li>
            <li><a href="#/Home"><i className="fa fa-circle-o"></i> Language Courses</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-cog"></i>
            <span>Settings</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="#/Home"><i className="fa fa-circle-o"></i> Access</a></li>
            <li><a href="#/Home"><i className="fa fa-circle-o"></i> Payment</a></li>
            <li><a href="#/Home"><i className="fa fa-circle-o"></i> Server</a></li>
          </ul>
        </li>        
      </ul>
    );
};
module.exports = NavigationMenu;


