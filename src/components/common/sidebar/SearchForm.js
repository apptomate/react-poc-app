import React, { PropTypes } from 'react';

const SearchForm = () => {
  return (
    <form action="#" method="get" className="sidebar-form">
      <div className="input-group">
        <input type="text" className="q" className="form-control" placeholder="Search..."></input>
        <span className="input-group-btn">
          <button type="submit" className="search" id="search-btn" className="btn btn-flat">
            <i className="fa fa-search"></i>
          </button>
        </span>
      </div>
    </form>
  );
};
module.exports = SearchForm;


