import Header from "../Components/Header/Header"
import TopNav from "../Components/Navbar/TopNavBar"
import imgHeader1 from "../Assets/vectorP1.png"
import "./Page3.scss"
<<<<<<< HEAD
import ChipGroup from '../Components/InputBoxes/ChipGroup/ChipGroup';
import Dropdown from "../Components/InputBoxes/DropDown/DropDownInput"
import PlainInput from "../Components/InputBoxes/Plain/TextFieldPlain"
import {Routes, Route, useNavigate} from 'react-router-dom';
const Page3 = () =>{

    const navigate = useNavigate()
    const options = ['C++','JavaScript','React.js','Java','Angular.js','Node.js','DBMS','MongoDB','Express.js','MERN','Android','Flutter','React Native','Html CSS','No Sql', 'Data Structures','Algorithms'];
=======
const Page3 = () =>{
>>>>>>> parent of e3dbcd0 (Lot of work done)
    return(
        <div className="J4D-admin-jobflow3">
            <div className="TopNav"><TopNav/></div>
            <div className="Header">
                <Header
                    Title = "Basic Information"
                    vectorImg = {imgHeader1}
<<<<<<< HEAD
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
                                placeholder="Enter Requirement 1"
                            />
                            <PlainInput
                                id = "Req2"
                                type = "text"
                                placeholder="Enter Requirement 2"
                            />
                            <PlainInput
                                id = "Req3"
                                type = "text"
                                placeholder="Enter Requirement 3"
                            />
                        </div>
                        <div className="col2">
                            <PlainInput
                                id = "Req4"
                                type = "text"
                                placeholder="Enter Requirement 3"
                            />
                            <PlainInput
                                id = "Req5"
                                type = "text"
                                placeholder="Enter Requirement 4"
                            />
                            <PlainInput
                                id = "Req6"
                                type = "text"
                                placeholder="Enter Requirement 5"
                            />
                        </div>
                    </div>
                    
                </div>
                <div className="Sec1Right">
                    <label htmlFor="TextArea">Enter Job Description</label>
                    <textarea name="textArea" id="TextArea" cols="30" rows="10" placeholder="Max 500 characters.." maxLength={1000}></textarea>
                </div>
            </div>
            <div className="Sec2">
                <div className='Sec2Left'>
                    <PlainInput
                        id = "AddReqSkills"
                        type = "text"
                        placeholder="Type and Enter"
                        label ="Add Required Sklls"
                    />
                </div>
                <div className='Sec2Right'>
                    <ChipGroup options={options}/>
                </div>
            </div>
            <div className="Footer">
            <Footer
                    primary="Next"
                    primaryOnclick={() => {
                        console.log('clicked')
                        navigate('/postjob/finalize')
                    }}
                    secondary1="Back"
                    secondary1Onclick={()=>{
                        navigate('/postjob/addCompensations')
                    }}
                    secondary2="Discard"
                    secondary2Onclick={''}
=======
>>>>>>> parent of e3dbcd0 (Lot of work done)
                />
            </div>
            <div className="Sec1"></div>
            <div className="Sec2"></div>
            <div className="Footer"></div>
        </div>
    )
}
export default Page3