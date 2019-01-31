import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ManageStudents from './components/managestudents/ManageStudents';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="*" component={ManageStudents}/>
  </Route>
);
