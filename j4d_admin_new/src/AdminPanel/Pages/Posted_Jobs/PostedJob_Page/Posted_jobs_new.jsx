import PlainInput from '../../JobFlow/Components/InputBoxes/Plain/TextFieldPlain';
import TopNav from '../../JobFlow/Components/Navbar/TopNavBar';
import JobCard from '../Components/JobCard';
import logo from '../Components/logo.png'
import data from '../../../Data/Jobs'
import NavBar from '../../JobFlow/Components/MainNavBar/NavBar';

const PostedJobs = () =>{
    const cards = data.map(item => {
        return (
            <JobCard
                key={item.id}
                item={item}
                save = 'false'
                logo = {logo}
                time = '2'
                Hired = '5'
                page = 'ManagePostedJobs'
            />
        )
    }) 

  return(

    <>
    <NavBar/>
    <div className='posted-jobs-page'>
        <div className='header-Nav'>
            <TopNav/>
        </div>
        <div className='Body-content'>
            <div className='Top-Body'>
                <div className='headings'>
                    <h1 className='page-heading' >MANAGE POSTED JOBS</h1>
                    <h1 className='page-sub-heading'>All your posted jobs at once.</h1>
                </div>
                <PlainInput 
                    id = "SearchBar"
                    type = "text"
                    name = 'Search'
                    placeholder="Search"
                />
            </div>
            <div className='Body-Bottom'>
                <div className='cardlist'>
                    {cards} 
                </div>
                
            </div>
        </div>
    </div>
    </>
    
  )

}

export default PostedJobs;