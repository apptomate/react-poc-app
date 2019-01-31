import React, { PropTypes } from 'react';
import SalesChart from "./SalesChart";
import GoalCompletion from "./GoalCompletion";
import TotalFigures from "./TotalFigures";

const MonthlyReport = ({ monthlyreport }) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="box">
                    <div className="box-header with-border">
                        <h3 className="box-title">{monthlyreport.monthlyreport.reporttitle}</h3>
                        <div className="box-tools pull-right">
                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                        </div>
                    </div>
                </div>

                <div className="box-body">
                    <div className="row">
                        <SalesChart saleschart={monthlyreport.monthlyreport.saleschart}></SalesChart>
                        <GoalCompletion goalcompletion={monthlyreport.monthlyreport.goalcompletion}></GoalCompletion>
                    </div>
                </div>
                <div className="box-footer">
                    <TotalFigures totalfigures={monthlyreport.monthlyreport.totalfigures}></TotalFigures>
                </div>
            </div>
        </div>
    );
};
module.exports = MonthlyReport;


