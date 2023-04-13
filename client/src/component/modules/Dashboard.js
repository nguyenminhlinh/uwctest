import React from "react";
import {  Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from "../UI/Sidebar";
import './styles/Dashboard.css';
import ListEmployee from "./ListEmployee";
import Task from "./Task";

import Notification from "./Notification";
import CollectorCalendar from "./CollectorCalendar";
import JanitorCalendar from "./JanitorCalendar";
import DetailCalendarCollector from "./DetailCalendarCollector";
import DetailCalendarJanitor from "./DetailJanitorCollector";
import Overview from "./Overview";
export default function Dashboard(){
    let location = useLocation();
    // console.log(location);
    return (
        <div className="Dashboard">
            <div className="sidebar">
                <Sidebar path = {location.pathname}/>
            </div>
            <div className="element">
                <Routes>
                    <Route path = '' element={<ListEmployee />} />
                    <Route path = '/Home' element={<Overview />} />
                    <Route path = 'DSNV' element = {<ListEmployee/>}/>
                    <Route path = 'NV' element = {<Task/>}/>
                    <Route path = 'DSNV/collectorCalendar' element = {<CollectorCalendar/>}/>
                    <Route path = 'DSNV/collectorCalendar/detail' element = {<DetailCalendarCollector/>}/>
                    <Route path = 'DSNV/janitorCalendar/detail' element = {<DetailCalendarJanitor/>}/>
                    <Route path = 'DSNV/janitorCalendar' element = {<JanitorCalendar/>}/>
                    <Route path = 'TB' element = {<Notification/>}/>
                    <Route path = 'NV' element = {<Task/>}/>
                </Routes>
            </div>
        </div>
    );
}