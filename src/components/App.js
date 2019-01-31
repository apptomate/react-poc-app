// This component handles the App template used on every page.
import React from 'react';
import MainHeader from './common/header/MainHeader';
import MainSideBar from './common/sidebar/MainSideBar';
import MainFooter from './common/footer/MainFooter';
import { connect } from 'react-redux';

import { HashRouter, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import ManageStudents from './managestudents/ManageStudents';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="wrapper">
                    <header className="main-header">
                        <MainHeader />
                    </header>
                    <aside className="main-sidebar">
                        <MainSideBar />
                    </aside>
                    {/* {this.props.children} */}
                    <Route path="/Home" component={HomePage} />
                    <Route path="/ManageStudents" component={ManageStudents} />
                    <footer className="main-footer">
                        <MainFooter />
                    </footer>

                </div>
            </HashRouter>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {

    };
}
export default connect(mapStateToProps)(App);
