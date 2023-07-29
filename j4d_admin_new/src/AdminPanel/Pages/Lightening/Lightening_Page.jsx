import NavBar from "../JobFlow/Components/MainNavBar/NavBar";
import TopNav from "../JobFlow/Components/Navbar/TopNavBar";
import data from '../../Data/Jobs'
import JobCard from "../Posted_Jobs/Components/JobCard";
import logo from '../Posted_Jobs/Components/logo.png'

const Lightening = () =>{

    const cards = data.map(item => {
        return (
            <JobCard
                key={item.id}
                item={item}
                save = 'false'
                logo = {logo}
                time = '2'
                Hired = '5'
                page = 'LighteningPage'
            />
        )
    }) 

    return (
    <>
    <NavBar/>
    <div className="Lightenning">
        <div className="PageHeader">
            <TopNav/>
        </div>
        <div className="LighteningBody">
            <div className="topBody">
            <div className='headings'>
                    <h1 className='page-heading'style={{textAlign:"left"}} >Lightening</h1>
                    <h1 className='page-sub-heading'>Supercharge Your Job Ads and Boost Your Reach to Top Talent!</h1>
            </div>
            </div>
            <div className="BodyBottom">
                <div className="cardlist">
                    {cards}
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Lightening