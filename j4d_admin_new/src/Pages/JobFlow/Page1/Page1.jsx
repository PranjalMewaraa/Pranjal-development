//import './page.scss'
import TopNavBar from '../Components/Navbar/TopNavBar'
import React, { useState } from 'react';
import Header from '../Components/Header/Header'
import imgHeader1 from '../Assets/vectorP1.png'
import PlainInput from '../Components/InputBoxes/Plain/TextFieldPlain'
import Footer from '../Components/Footer/Footer'
const Page1 = ({handleUpdateObject , updatedObject}) => {

    //const[jobPost,updateObject]=useState({})

    const [jobRole, setJobRole] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [exp, setExp] = useState('');
    const [opening, setOpening] = useState('');
    const [type, setType] = useState('');
    const [level, setLevel] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [field, setField] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'jobRole') {
            setJobRole(value);
          }else if (name === 'jobCity') {
            setCity(value);
          }else if (name === 'jobExp') {
            setExp(value);
          }else if (name === 'jobType') {
            setType(value);
          }else if (name === 'jobLevel') {
            setLevel(value);
          }else if (name === 'Openings') {
            setOpening(value);
          }else if (name === 'DueDate') {
            setDueDate(value);
          } else if (name === 'jobState') {
            setState(value);
          }else if (name === 'jobField') {
            setField(value);
          }
        console.log("in page1.js"+typeof(handleUpdateObject))
        handleUpdateObject((prevObject) => ({
          ...prevObject,
          [name]: value,
        }));
        console.log('page1'+JSON.stringify(updatedObject, null, 2))
      };

    return (
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
                        name = 'jobRole'
                        value = {jobRole}
                        onChange={handleChange}
                        placeholder="Frontend Developer"
                        label ="Job Role"
                    />
                    <div className='inputSetPage1'>
                        <PlainInput
                            id = "jobstate"
                            type = "text"
                            name = 'jobState'
                            value = {state}
                            onChange={handleChange}
                            placeholder="Punjab"
                            label ="State"
                        />
                        <PlainInput
                            id = "jobCity"
                            type = "text"
                            name = 'jobCity'
                            value = {city}
                            onChange={handleChange}
                            placeholder="Ludhiana"
                            label ="City"
                        />
                    </div>
                    <PlainInput
                        id = "ExpReq"
                        type = "number"
                        placeholder="0"
                        name = 'jobExp'
                        value = {exp}
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
                        name = 'Openings'
                        value = {opening}
                        onChange={handleChange}
                        placeholder="0"
                        label ="No of Job Openings"
                    />
                    <PlainInput
                            id = "JobType"
                            name = 'jobType'
                            value = {type}
                            onChange={handleChange}
                            type = "text"
                            placeholder="Full Time"
                            label ="Job Type"
                    />
                    <PlainInput
                        id = "Joblevel"
                        type = "text"
                        name = 'jobLevel'
                        value = {level}
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
                        value = {dueDate}
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
                        value = {field}
                        onChange={handleChange}
                        placeholder="Development"
                        label ="Job Field"
                    />
                </div>
            </div>
            <div className='Footer'>
                <Footer
                    primary="Next"
                    next = '/postjob/compensation'
                    secondary1="Back"
                    secondary2="Discard"
                />
            </div>
        </div>
    )
}

export default Page1

