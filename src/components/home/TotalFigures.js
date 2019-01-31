import React, { PropTypes } from 'react';

const TotalFigures = ({ totalfigures }) => {
    var i = 0;
    var createTotalFiguresInfo = function (totalfig) {
        return (
            <div className="col-sm-3 col-xs-6" key={i++}>
                <div className="description-block border-right">
                    <span className={"description-percentage " + totalfig.colorcode}><i className={totalfig.trendclass}></i> {totalfig.impactpercent}</span>
                    <h5 className="description-header">{totalfig.value}</h5>
                    <span className="description-text">{totalfig.title}</span>
                </div>
            </div>
        )
    };
    return (
        <div className="row">
            {totalfigures.totalfiguresList.map(createTotalFiguresInfo, this)}
        </div>
    );
};
module.exports = TotalFigures;


