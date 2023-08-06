// import './page4.scss'
import TopNavBar from '../Components/Navbar/TopNavBar'
import Img from '../Assets/vectorP1.png'
import React, { useState } from 'react';
import Header  from "../Components/Header/Header";
import PlainInput from '../Components/InputBoxes/Plain/TextFieldPlain';
import Toggle from '../Components/Buttons/ToggleButton/Toogle'
import Footer from '../Components/Footer/Footer';
import {Routes, Route, useNavigate} from 'react-router-dom';
import NavBar from '../Components/MainNavBar/NavBar';


const options = [
    {value: 'value-1', text: 'text-1'},
    {value: 'value-2', text: 'text-2'},
    {value: 'value-3', text: 'text-3'}
];


const Page4 = () =>{
    const navigate = useNavigate()
    return(
        <>
        <NavBar/>
        <div className='J4D-admin-jobflow4'>
            <div className='TopNav'> <TopNavBar/> </div>
            <div className='Header'> 
                <Header Title = 'Set Preferance and Finalize' vectorImg={Img} page="4" />
             </div>
            <div className='Sec1'>
                <div className='Sec1Left'>
                    <PlainInput
                        id = "rECRUITEReMAIL"
                        type = "email"
                        
                        onChange=''
                        placeholder="xyz@Domain.com"
                        label ="Recruiter's Email Address"
                    />
                    <PlainInput
                        id = "RecruiterLinkedin"
                        onChange=''
                        type = "url"
                        placeholder="www.linkedin.com/in/..."
                        label ="Recruiter's Linkedin"
                    />
                </div>
                <div className='Sec1Mid'>
                    <p id='prefExp'>
                        At Least<br/> 
                        <div className='yrsExpPref'>
                        <span>
                            <PlainInput 
                                id="yrsExpPref"
                                type="number"
                                onChange=''
                                placeholder='0'
                            />
                        </span>
                        </div>
                         of<br/>
                        <span>
                        <select className='selectbox' value="value-2" onChange={''}>
                            {options.map(item => {
                                return (<option key={item.value} value={item.value}>{item.text}</option>);
                            })}
                        </select>
                        </span>
                    </p>
                    <p id='prefExp2'>
                        Prefer Highest Education as 
                        <select className='selectbox' value="value-2" onChange={''}>
                            {options.map(item => {
                                return (<option key={item.value} value={item.value}>{item.text}</option>);
                            })}
                        </select>
                    </p>
                </div>
                <div className='Sec1Right'>
                    <PlainInput
                        id = "LocPref"
                        type = "text"
                        placeholder="Mumbai"
                        onChange=''
                        label ="Location Preferance"
                    />
                    <PlainInput
                        id = "AppDeadline"
                        type = "date"
                        placeholder="15/07/2003"
                        onChange=''
                        label ="Set Application Deadline"
                    />
                </div> 
            </div>
            <div className='Sec2'>
                <div className='Col1'>
                        <Toggle label = 'Candidates willing to Relocate' />
                        <Toggle label = 'Experienced Candidates' />
                        <Toggle label = 'Skill Badge Preferance' />
                </div>
                <div className='Col2'>
                        <Toggle label = 'Profile Collection' />
                        <Toggle label = 'Share Organisational Policies' />
                        <Toggle label = 'Allow Candidate to Contact' />
                </div>
            </div>
            <div className='Footer'>
            <Footer
                    primary="Post"
                    next = '/'
                    secondary1="Back"
                    secondary2="Discard"
                />
            </div>
        </div>
        </>
        
    )
}
export default Page4