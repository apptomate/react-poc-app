import React, { PropTypes } from 'react';

const GoalCompletion = ({ goalcompletion }) => {
    var i =0;
    var createGoalCompletion = function (eachgoalcompletion) {
        return (
            <div className="progress-group" key={i++}>
                <span className="progress-text">{eachgoalcompletion.title}</span>
                <span className="progress-number"><b>{eachgoalcompletion.value}</b></span>
                <div className="progress sm">                
                    <div style={{ width: eachgoalcompletion.percentcompleted + '%' }} className={"progress-bar " + eachgoalcompletion.colorcode} ></div>
                </div>
            </div>
        )
    };
    return (
        <div className="col-md-4">
            <p className="text-center">
                <strong>{goalcompletion.goalparametertitle}</strong>
            </p>
            {goalcompletion.goalcompletionList.map(createGoalCompletion, this)}
        </div>
    );
};
module.exports = GoalCompletion;


