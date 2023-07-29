import Header from "../Components/Header/Header"
import TopNav from "../Components/Navbar/TopNavBar"
import imgHeader1 from "../Assets/vectorP1.png"
import React, { useState } from 'react';
import Footer from "../Components/Footer/Footer"
//import "./Page3.scss"
import ChipGroup from '../Components/InputBoxes/ChipGroup/ChipGroup';
import Dropdown from "../Components/InputBoxes/DropDown/DropDownInput"
import PlainInput from "../Components/InputBoxes/Plain/TextFieldPlain"
import NavBar from "../Components/MainNavBar/NavBar";
const Page3 = ({ handleUpdateObject}) =>{

    const[Req1,setReq1] = useState('')
    const[Req2,setReq2] = useState('')
    const[Req3,setReq3] = useState('')
    const[Req4,setReq4] = useState('')
    const[Req5,setReq5] = useState('')
    const[Req6,setReq6] = useState('')
    const[jobDesc,setJobDesc]=useState('')
    const[Requirement,setReq]=useState({})

    const [options, setOptions] = useState(['C++','JavaScript','React.js','Java','Angular.js','Node.js','DBMS','MongoDB','Express.js','MERN','Android','Flutter','React Native','Html CSS','No Sql', 'Data Structures','Algorithms']);
    const handleAddSkills = (e) =>{
        const value = e.target.value;
        
        setOptions(
            [...options, value]
        )
    }
    const handleReq = (e) => {
        const { name, value } = e.target;
          if (name === 'Req1') {
            setReq1(value);
          }else if (name === 'Req2') {
            setReq2(value);
          }else if (name === 'Req3') {
            setReq3(value);
          }else if (name === 'Req4') {
            setReq4(value);
          }else if (name === 'Req5') {
            setReq5(value);
          }else if (name === 'Req6') {
            setReq6(value);
          }
        setReq((prevRequirement) => ({
          ...prevRequirement,
          [name]: value,
        }));
        handleUpdateObject((prevObject) => ({
          ...prevObject,
          Requirement: {
            ...prevObject.Requirement,
            [name]: value,
          },
        }));
        
      };

    const handleTextArea = (e) =>{
        const {name,value} = e.target;
        if(name==='JobDesc'){
            setJobDesc(value)
        }
        handleUpdateObject((prevObject) => ({
            ...prevObject,
            ['JobDescription']: value,
          }));
    }  
    
    
    return(
        <>
        <NavBar/>
        <div className="J4D-admin-jobflow3">
            <div className="TopNav"><TopNav/></div>
            <div className="Header">
                <Header
                    Title = "Important Information"
                    vectorImg = {imgHeader1}
                    page = "3"
                />
            </div>
            <div className="Sec1">
                <div className="Sec1Left">
                    <label htmlFor="xx" >Enter Minimum Requirements</label>
                    <div className="InpGroup" id="xx"> 
                        <div className="col1">
                            <PlainInput
                                id = "Req1"
                                type = "text"
                                name = 'Req1'
                                value = {Req1}
                                onChange = {handleReq}
                                placeholder="Enter Requirement 1"
                            />
                            <PlainInput
                                id = "Req2"
                                type = "text"
                                name = 'Req2'
                                value = {Req2}
                                onChange = {handleReq}
                                placeholder="Enter Requirement 2"
                            />
                            <PlainInput
                                id = "Req3"
                                type = "text"
                                name = 'Req3'
                                value = {Req3}
                                onChange = {handleReq}
                                placeholder="Enter Requirement 3"
                            />
                        </div>
                        <div className="col2">
                            <PlainInput
                                id = "Req4"
                                type = "text"
                                name = 'Req4'
                                value = {Req4}
                                onChange = {handleReq}
                                placeholder="Enter Requirement 3"
                            />
                            <PlainInput
                                id = "Req5"
                                type = "text"
                                name = 'Req5'
                                value = {Req5}
                                onChange = {handleReq}
                                placeholder="Enter Requirement 4"
                            />
                            <PlainInput
                                id = "Req6"
                                type = "text"
                                name = 'Req6'
                                value = {Req6}
                                onChange = {handleReq}
                                placeholder="Enter Requirement 5"
                            />
                        </div>
                    </div>
                    
                </div>
                <div className="Sec1Right">
                    <label htmlFor="TextArea">Enter Job Description</label>
                    <textarea name="JobDesc" id="TextArea" cols="30" rows="10" placeholder="Max 500 characters.." maxLength={1000} value={jobDesc} onChange={handleTextArea}></textarea>
                </div>
            </div>
            <div className="Sec2">
                <div className='Sec2Left'>
                    <PlainInput
                        id = "AddReqSkills"
                        type = "text"
                        name ='AddSkills'
                        value = {''}
                        onChange={handleAddSkills}
                        placeholder="Type and Enter"
                        label ="Add Required Sklls"
                    />
                </div>
                <div className='Sec2Right'>
                    <ChipGroup options={options} handleUpdateObject={handleUpdateObject}/>
                </div>
            </div>
            <div className="Footer">
            <Footer
                    primary="Next"
                    next = '/postjob/finalize'
                    secondary1="Back"
                    secondary2="Discard"
                />
            </div>
        </div>
        </>
    )
}
export default Page3