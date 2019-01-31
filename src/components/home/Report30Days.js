import React, { PropTypes } from 'react';
import Ionicon from 'react-ionicons';
import BrowserUsage from "./BrowserUsage";
const css = `svg {vertical-align:middle;}`;

const Report30Days = ({ report30days, browserusage }) => {
    var i =0
    var createReportIcons = function (reportinfo) {
        return (
            <div className={"info-box bg-" + reportinfo.colorcode} key={i++}>
                <span className="info-box-icon">
                    <style>{css}</style>
                    <Ionicon icon={reportinfo.iconclassname} fontSize="60px"></Ionicon>
                </span>
                <div className="info-box-content">
                    <span className="info-box-text">{reportinfo.parameter}</span>
                    <span className="info-box-number">{reportinfo.value}</span>

                    <div className="progress">
                        <div className="progress-bar" style={{ width: reportinfo.percentagecompleted + '%' }}></div>
                    </div>
                    <span className="progress-description">
                        {reportinfo.description} Increase in 30 Days
                  </span>
                </div>
            </div>
        )
    };
    return (
        <div className="col-md-4">
            {report30days.reportfor30days.reportinfo.map(createReportIcons, this)}
            <BrowserUsage browserusage={browserusage}></BrowserUsage>
        </div>
    );
};
module.exports = Report30Days;


