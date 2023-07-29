import PlainInput from '../../JobFlow/Components/InputBoxes/Plain/TextFieldPlain';
import TopNav from '../../JobFlow/Components/Navbar/TopNavBar';
import JobCard from '../Components/JobCard';
import logo from '../Components/logo.png'
import NavBar from '../../JobFlow/Components/MainNavBar/NavBar';

const PostedJobs = () =>{

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
                <JobCard
                 save = 'true'
                 logo = {logo}
                 location = 'Hyderabad, IN'
                 jobRole = 'Frontend Developer'
                 time = '2'
                 salary='$1400-$1800'
                 desc ='It is a long established fact that a reader will be distracted by the readab content of a page while looking at its layout'
                 Hired = '5'
                 TotalOpening='10'
                 />
            
                 <JobCard
                 save = 'true'
                 logo = {logo}
                 location = 'Hyderabad, IN'
                 jobRole = 'Frontend Developer'
                 time = '2'
                 salary='$1400-$1800'
                 desc ='It is a long established fact that a reader will be distracted by the readab content of a page while looking at its layout'
                 Hired = '5'
                 TotalOpening='10'
                 />
                 <JobCard
                 save = 'true'
                 logo = {logo}
                 location = 'Hyderabad, IN'
                 jobRole = 'Frontend Developer'
                 time = '2'
                 salary='$1400-$1800'
                 desc ='It is a long established fact that a reader will be distracted by the readab content of a page while looking at its layout'
                 Hired = '5'
                 TotalOpening='10'
                 />
                 <JobCard
                 save = 'true'
                 logo = {logo}
                 location = 'Hyderabad, IN'
                 jobRole = 'Frontend Developer'
                 time = '2'
                 salary='$1400-$1800'
                 desc ='It is a long established fact that a reader will be distracted by the readab content of a page while looking at its layout'
                 Hired = '5'
                 TotalOpening='10'
                 />
                 <JobCard
                 save = 'true'
                 logo = {logo}
                 location = 'Hyderabad, IN'
                 jobRole = 'Frontend Developer'
                 time = '2'
                 salary='$1400-$1800'
                 desc ='It is a long established fact that a reader will be distracted by the readab content of a page while looking at its layout'
                 Hired = '5'
                 TotalOpening='10'
                 />
                 <JobCard
                 save = 'true'
                 logo = {logo}
                 location = 'Hyderabad, IN'
                 jobRole = 'Frontend Developer'
                 time = '2'
                 salary='$1400-$1800'
                 desc ='It is a long established fact that a reader will be distracted by the readab content of a page while looking at its layout'
                 Hired = '5'
                 TotalOpening='10'
                 />
                 <JobCard
                 save = 'true'
                 logo = {logo}
                 location = 'Hyderabad, IN'
                 jobRole = 'Frontend Developer'
                 time = '2'
                 salary='$1400-$1800'
                 desc ='It is a long established fact that a reader will be distracted by the readab content of a page while looking at its layout'
                 Hired = '5'
                 TotalOpening='10'
                 />
                 <JobCard
                 save = 'true'
                 logo = {logo}
                 location = 'Hyderabad, IN'
                 jobRole = 'Frontend Developer'
                 time = '2'
                 salary='$1400-$1800'
                 desc ='It is a long established fact that a reader will be distracted by the readab content of a page while looking at its layout'
                 Hired = '5'
                 TotalOpening='10'
                 />
                </div>
                
            </div>
        </div>
    </div>
    </>
    
  )

}

export default PostedJobs;