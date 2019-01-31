import React, { PropTypes } from 'react';
import Ionicon from 'react-ionicons'

const css = `svg {vertical-align:middle;}`;

const InfoBoxesList = ({ infoboxes }) => {
    var i = 0;
    var createInfoBoxesList = function (infobox) {
        
        return (

            <div className="col-md-3 col-sm-6 col-xs-12" key={i++}>
                <div className="info-box">
                    <span className={"info-box-icon " + infobox.colorcode}>
                        <style>{css}</style>
                        <Ionicon icon={infobox.iconclass} fontSize="60px"></Ionicon></span>
                    <div className="info-box-content">
                        <span className="info-box-text">{infobox.title}</span>
                        <span className="info-box-number">{infobox.value}</span>
                    </div>
                </div>
            </div>
        )
    };
    return (
        <div className="row">
            {infoboxes.infoboxes.infoboxesList.map(createInfoBoxesList, this)}
        </div>
    );
};
module.exports = InfoBoxesList;


