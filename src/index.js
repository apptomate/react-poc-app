import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadMessages, loadNotifications, loadTasks, loadUserProfile } from './actions/Message-Notification-Tasks_Actions';
import { loadInfoBoxes, loadMonthlyReport, loadVisitorReport, loadChatData, loadLatestMembers, loadReport30Days, loadBrowserUsage } from './actions/HomePageActions';
import { loadStudentsList } from './actions/ManageStudentsActions';

import Ionicon from 'react-ionicons';
import './styles/application.css';
import './styles/skins/skin-blue.min.css';
import './styles/react-bootstrap-table.min.css';
import '../node_modules/react-s-alert/dist/s-alert-default.css';
import '../node_modules/react-s-alert/dist/s-alert-css-effects/jelly.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './customjs/application.min.js';
import '../node_modules/jquery-slimscroll/jquery.slimscroll.min.js';

const store = configureStore();

// Dispatch actions to load initial state.
store.dispatch(loadMessages());
store.dispatch(loadNotifications());
store.dispatch(loadTasks());
store.dispatch(loadUserProfile());
store.dispatch(loadInfoBoxes());
store.dispatch(loadMonthlyReport());
store.dispatch(loadVisitorReport());
store.dispatch(loadChatData());
store.dispatch(loadLatestMembers());
store.dispatch(loadReport30Days());
store.dispatch(loadBrowserUsage());
store.dispatch(loadStudentsList());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
