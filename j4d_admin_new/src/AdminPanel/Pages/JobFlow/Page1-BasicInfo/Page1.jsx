//import './page.scss'
import TopNavBar from '../Components/Navbar/TopNavBar'
import React, { useState } from 'react';
import Header from '../Components/Header/Header'
import imgHeader1 from '../Assets/vectorP1.png'
import PlainInput from '../Components/InputBoxes/Plain/TextFieldPlain'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/MainNavBar/NavBar';
import { Navigate, useNavigate } from 'react-router-dom';
import data from '../../../Data/Jobs'
const Page1 = () => {
    const navigate = useNavigate()
    const [formData , setFormData] = useState(
        data
    )
    


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        console.log(formData)
      };

    return (
        <>
        <NavBar/>
        <div className='J4D-admin-jobflow1'>
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
                        name = 'jobTitle'
                        value = {formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Frontend Developer"
                        label ="Job Role"
                    />
                    <div className='inputSetPage1'>
                        <PlainInput
                            id = "jobstate"
                            type = "text"
                            name = 'state'
                            value = {formData.state}
                            onChange={handleChange}
                            placeholder="Punjab"
                            label ="State"
                        />
                        <PlainInput
                            id = "jobCity"
                            type = "text"
                            name = 'city'
                            value = {formData.city}
                            onChange={handleChange}
                            placeholder="Ludhiana"
                            label ="City"
                        />
                    </div>
                    <PlainInput
                        id = "ExpReq"
                        type = "number"
                        placeholder="0"
                        name = 'workExp'
                        value = {formData.workExp}
                        onChange={handleChange}
                        label ="Experience Required"
                    />
                    </div>
                    
                </div>
                <div className='Sec1Right'>
                    <div className='InputGroup2'>
                    <PlainInput
                        id = "OpeningCount"
                        type = "number"
                        name = 'jobOpening'
                        value = {formData.jobOpening}
                        onChange={handleChange}
                        placeholder="0"
                        label ="No of Job Openings"
                    />
                    <PlainInput
                            id = "JobType"
                            name = 'jobType'
                            value = {formData.jobType}
                            onChange={handleChange}
                            type = "text"
                            placeholder="Full Time"
                            label ="Job Type"
                    />
                    <PlainInput
                        id = "Joblevel"
                        type = "text"
                        name = 'jobLevel'
                        value = {formData.jobLevel}
                        onChange={handleChange}
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
                        name = 'DueDate'
                        value = {formData.DueDate}
                        onChange={handleChange}
                        placeholder="12/01/2023"
                        label ="Hiring Due Date"
                    />
                </div>
                <div className='Sec2Right'>
                    <PlainInput
                        id = "JobField"
                        type = "text"
                        name = 'jobField'
                        value = {formData.jobField}
                        onChange={handleChange}
                        placeholder="Development"
                        label ="Job Field"
                    />
                </div>
            </div>
            <div className='Footer'>
                
                    <Footer
                        primary="Next"
                        next="/postjob/add-compensation"
                        secondary1="Back"
                        secondary2="Discard"
                        setFormData={setFormData}
                        formData={formData}
                    />
            </div>
        </div>
        </>
        
    )
}

export default Page1