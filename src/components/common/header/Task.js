import React, { PropTypes } from 'react';

const TaskList = ({ tasks }) => {
    var createTaskList = function (task) {
        return (
            <li data-taskid={task.id} key={task.id} >
                <a href="#">
                    <h3>
                        {task.taskText}
                        <small className="pull-right">{task.percentCompleted}%</small>
                    </h3>
                    <div className="progress xs">
                        <div className="progress-bar progress-bar-aqua" style={{ width: task.percentCompleted + '%' }} role="progressbar"
                            aria-valuenow={task.percentCompleted} aria-valuemin="0" aria-valuemax="100">
                            <span className="sr-only">{task.percentCompleted}% Complete</span>
                        </div>
                    </div>
                </a>
            </li>
        )
    };
    return (
        <li className="dropdown tasks-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-flag-o"></i>
                <span className="label label-danger">{tasks.tasks.tasksCount}</span>
            </a>
            <ul className="dropdown-menu">
                <li className="header">You have {tasks.tasks.tasksCount} tasks</li>
                <li>
                    <ul className="menu">
                        {tasks.tasks.tasksList.map(createTaskList, this)}
                    </ul>
                </li>
                <li className="footer">
                    <a href="#">View all tasks</a>
                </li>
            </ul>
        </li>
    );
};
module.exports = TaskList;


