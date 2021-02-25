import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../css/UserDashboard.css';
import Profile from "../components/DashboardPage/Profile";
import Settings from "../components/DashboardPage/Settings";
import Home from "../components/DashboardPage/HomePage/Home";
import SidebarMenu from "../components/DashboardPage/SidebarMenu";

function UserDashboard() {
    return <div className='UserDashboard'>
        <SidebarMenu />
        <div className='DashboardView'>
            <Switch>
                <Route
                    path='/dashboard'
                    exact
                    component={Home}
                />

                <Route
                    path='/dashboard/profile'
                    component={Profile}
                />
                <Route
                    path='/dashboard/settings'
                    component={Settings}
                />
                <Route
                />
            </Switch>
        </div>
    </div>;
}

export default UserDashboard;