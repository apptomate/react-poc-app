import React, { PropTypes } from 'react';
var Doughnut = require("react-chartjs").Doughnut;

var pieOptions = {
    segmentShowStroke: true,
    segmentStrokeColor: '#fff',
    segmentStrokeWidth: 1,
    percentageInnerCutout: 50,
    animationSteps: 100,
    animationEasing: 'easeOutBounce',
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: false,
    legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<segments.length; i++){%><li><span style=\'background-color:<%=segments[i].fillColor%>\'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
    tooltipTemplate: '<%=value %> <%=label%> users'
};

const BrowserUsage = ({ browserusage }) => {
    var i =0; 
    var j = 0;
    var createListOfBrowsers = function (browser) {
        return (
            <li key={i++}>
                <i className={"fa fa-circle-o text-" + browser.color}></i> {browser.name}
            </li>
        )
    };

    var createListOfCountries = function (country) {
        return (
            <li key={j++}>
                <a href="#">{country.country}
                    <span className="pull-right text-red"><i className="fa fa-angle-down"></i> {country.usage}</span>
                </a>
            </li>
        )
    };

    return (
        <div className="box box-default">
            <div className="box-header with-border">
                <h3 className="box-title">{browserusage.browserusage.widgettitle}</h3>
                <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                </div>
            </div>
            <div className="box-body">
                <div className="row">
                    <div className="col-md-8">
                        <div className="chart-responsive">
                            <Doughnut id="pieChart" height="150" data={browserusage.browserusage.piechartdata} options={pieOptions} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <ul className="chart-legend clearfix">
                            {browserusage.browserusage.listofbrowsers.map(createListOfBrowsers, this)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box-footer no-padding">
                <ul className="nav nav-pills nav-stacked">
                    {browserusage.browserusage.listofcountries.map(createListOfCountries, this)}
                </ul>
            </div>
        </div>
    );
};
module.exports = BrowserUsage;


