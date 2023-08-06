//import "./TopNavBar.scss"
import {NavLink} from 'react-router-dom'
const TopNav =()=>{
    return(
        <div className="TopNavigation">
            <ul>
                <li><NavLink to="/" activeClassName="active-link">DashBoard</NavLink></li>
                <li><NavLink to="/posted-jobs"  activeClassName="active-link">Jobs</NavLink></li>
                <li><NavLink to="/Lightening" activeClassName="active-link">Lightning</NavLink></li>
                <li><NavLink to="/talent-lookup" activeClassName="active-link">Talent Lookup</NavLink></li>
                <li><NavLink to="/application" activeClassName="active-link">Applications</NavLink></li>
                <li><NavLink to="/analytics" activeClassName="active-link">Analytics</NavLink></li>
                <li><NavLink to="/schedules" activeClassName="active-link">Schedules</NavLink></li>
            </ul>
        </div>
    )
}
export default TopNav