import React, { PropTypes } from 'react';
var LineChart = require("react-chartjs").Line;
const salesChartCss = `#salesChart{height:180px;}`;


const SalesChart = ({ saleschart }) => {

    var salesChartOptions = {
        showScale: true,
        scaleShowGridLines: false,
        scaleGridLineColor: 'rgba(0,0,0,.05)',
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve: true,
        bezierCurveTension: 0.3,
        pointDot: false,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].lineColor%>\'></span><%=datasets[i].label%></li><%}%></ul>',
        maintainAspectRatio: true,
        responsive: true
    };

    var salesChartData = {
        "labels": saleschart.labels,
        "datasets": saleschart.datasets
    };

    return (
        <div className="col-md-8">
            <p className="text-center">
                <strong>{saleschart.chartduration}</strong>
            </p>
            <div className="chart">
                <style>{salesChartCss}</style>
                <LineChart id="salesChart" data={salesChartData} options={salesChartOptions} redraw />
            </div>
        </div>
    );
};
module.exports = SalesChart;


