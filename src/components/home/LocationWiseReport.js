import React, { PropTypes } from 'react';
var PolarAreaChart = require("react-chartjs").PolarArea;
import Ionicon from 'react-ionicons';

const css = `.otherparameters{min-height:280px;}`;
const mapcss = `#world-map-markers{height: 325px;margin-left: -65px;}`;

var polarchartoptions = {
    scaleShowLabelBackdrop: true,
    scaleBackdropColor: "rgba(255,255,255,0.75)",
    scaleBeginAtZero: true,
    scaleBackdropPaddingY: 2,
    scaleBackdropPaddingX: 2,
    scaleShowLine: true,
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
}

const LocationWiseReport = ({ visitorreport }) => {
    var i = 0;
    var createChartForOtherParameters = function (eachparameter) {
        return (
            <div className="description-block margin-bottom" key={i++}>
                <Ionicon icon={eachparameter.iconclass} fontSize="40px"></Ionicon>
                <h5 className="description-header">{eachparameter.value}</h5>
                <span className="description-text">{eachparameter.label}</span>
            </div>
        )
    };
    return (
        <div className="row">
            <div className="col-md-9 col-sm-8">
                <div className="pad">
                    <style>{mapcss}</style>
                    <div id="world-map-markers">
                        <PolarAreaChart height="320px" width="640px" data={visitorreport.reportdata.coordinates} options={polarchartoptions} />
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-4">
                <style>{css}</style>
                <div className="otherparameters pad box-pane-right bg-green">
                    {visitorreport.reportdata.otherparameters.map(createChartForOtherParameters, this)}
                </div>
            </div>
        </div>
    );
};
module.exports = LocationWiseReport;


