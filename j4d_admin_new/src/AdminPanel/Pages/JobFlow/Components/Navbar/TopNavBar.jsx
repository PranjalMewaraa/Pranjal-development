//import "./TopNavBar.scss"
import { NavLink, useLocation } from 'react-router-dom'; 

const TopNav =()=>{
    const location = useLocation();
    return(
        <div className="TopNavigation">
            <ul>
                <li><NavLink to="/dashboard" isActive={() => ['/dashboard'].includes(location.pathname)}>
                    DashBoard
                </NavLink></li>
                <li><NavLink to="/posted-jobs" isActive={() => ['/posted-jobs'].includes(location.pathname)}>
                    Jobs
                </NavLink></li>
                <li><NavLink to="/lightning" isActive={() => ['/lightning'].includes(location.pathname)}>
                    Lightning
                </NavLink></li>
                <li><NavLink to="/talent-lookup" isActive={() => ['/talent-lookup'].includes(location.pathname)}>
                    Talent Lookup
                </NavLink></li>
                <li>
                    <NavLink to="/application" isActive={() => ['/application'].includes(location.pathname)}>
                        Applications
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/analytics" isActive={() => ['/analytics'].includes(location.pathname)}>
                        Analytics
                    </NavLink>
                </li>
                <li><NavLink to="/schedules" isActive={() => ['/schedules'].includes(location.pathname)}>
                    Schedules
                </NavLink></li>
            </ul>
        </div>
    )
}
export default TopNav