
import TopNavBar from "../../JobFlow/Components/Navbar/TopNavBar";

import PlainInput from '../../JobFlow/Components/InputBoxes/Plain/TextFieldPlain'


export default function Posted_jobs() {
  return (
    <div>
      
      <div className='jobdetails'>
        <div className='navbar'>
        <TopNavBar/>
        </div>
      
      
      <div className='maincontent'>
        <div className='upperpart'>
        <div className='header'>
          <div className='MainHeader'>
             Manage Posted Jobs
          </div>
          <div className='secondaryHeader'>
             All your posted jobs in one place
          </div>
        </div>
        <div className='searchbox'>
             <div >
             <PlainInput
             placeholder='Filter'
             />
             </div>
             <div >
             <PlainInput
             placeholder='Search Job, Company Name etc'/>
             </div>
        </div>
      </div>


      <div className='cards'>
        <div className='row1'>
        
        </div>
        <div className='row2'>

        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
