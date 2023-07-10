import "./TopNavBar.scss"
import React, { useRef } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
const TopNav =(props)=>{
    const navigate = useNavigate()
    const handleClk = () => {
        navigate('/postjob/basicInfo')
    }
    return(
        <div className="TopNavigation">
            <div className="NavLeft">
            <ul>
                <li><a href="/dashboard">DashBoard</a></li>
                <li><a href="/posted-jobs">Jobs</a></li>
                <li><a href="/lightning">Lightning</a></li>
                <li><a href="/talent-lookup">Talent Lookup</a></li>
                <li><a href="/applications">Applications</a></li>
                <li><a href="/analytics">Analytics</a></li>
                <li><a href="/schedules">Schedules</a></li>
            </ul>
            </div>
            <div className="NavRight">
                <button className="primaryButtonx" id={props.id} onClick={handleClk}>Post Job</button>
            </div>
                
        </div>
    )
}
export default TopNav