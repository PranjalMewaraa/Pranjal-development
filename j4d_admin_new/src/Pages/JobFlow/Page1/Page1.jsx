import './page.scss'
import TopNavBar from '../Components/Navbar/TopNavBar'
import Header from '../Components/Header/Header'
import imgHeader1 from '../Assets/vectorP1.png'
import PlainInput from '../Components/InputBoxes/Plain/TextFieldPlain'
import Footer from '../Components/Footer/Footer'
import {Routes, Route, useNavigate} from 'react-router-dom';
const Page1 = () => {
    const navigate = useNavigate();
    const Back =() =>{
        navigate('/')
    }
    return (
        <div className='JobFlowPage1'>
            <div className='TopNav'>
                <TopNavBar/>
            </div>
            <div className='Header'>
                <Header
                    Title = "Basic Information"
                    vectorImg = {imgHeader1}
                    page = "1"
                />
            </div>
            <div className='Sec1'>
                <div className='Sec1Left'>
                    <div className='InputGroup'>
                    <PlainInput
                        id = "jobRole"
                        type = "text"
                        placeholder="Frontend Developer"
                        label ="Job Role"
                    />
                    <div className='inputSetPage1'>
                        <PlainInput
                            id = "jobstate"
                            type = "text"
                            placeholder="Punjab"
                            label ="State"
                        />
                        <PlainInput
                            id = "jobCity"
                            type = "text"
                            placeholder="Ludhiana"
                            label ="City"
                        />
                    </div>
                    <PlainInput
                        id = "ExpReq"
                        type = "number"
                        placeholder="0"
                        label ="Experience Required"
                    />
                    </div>
                    
                </div>
                <div className='Sec1Right'>
                    <div className='InputGroup2'>
                    <PlainInput
                        id = "OpeningCount"
                        type = "number"
                        placeholder="0"
                        label ="No of Job Openings"
                    />
                    <PlainInput
                            id = "JobType"
                            type = "text"
                            placeholder="Full Time"
                            label ="Job Type"
                    />
                    <PlainInput
                        id = "Joblevel"
                        type = "text"
                        placeholder="Fresher.."
                        label ="Job Level"
                    />
                    </div>
                </div>
            </div>
            <div className='Sec2'>

                <div className='Sec2Left'>
                    <PlainInput
                        id = "DueDateHire"
                        type = "date"
                        placeholder="12/01/2023"
                        label ="Hiring Due Date"
                    />
                </div>
                <div className='Sec2Right'>
                    <PlainInput
                        id = "JobField"
                        type = "text"
                        placeholder="Development"
                        label ="Job Field"
                    />
                </div>
            </div>
            <div className='Footer'>
                <Footer
                    primary="Next"
                    primaryOnclick={() => {
                        navigate('/postjob/addCompensations')
                    }}
                    secondary1="Back"
                    secondary1Onclick={Back}
                    secondary2="Discard"
                    secondary2Onclick={''}
                />
            </div>
        </div>
    )
}

export default Page1