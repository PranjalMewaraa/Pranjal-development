//import "./TopNavBar.scss"

const TopNav =()=>{
    return(
        <div className="TopNavigation">
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
    )
}
export default TopNav