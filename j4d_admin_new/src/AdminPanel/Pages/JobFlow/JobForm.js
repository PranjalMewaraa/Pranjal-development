import React, { useState } from 'react'
import Header from './Components/Header/Header'
import jobsData from '../../Data/Jobs'
import './job.scss'
import imgHeader1 from './Assets/vectorP1.png'
import Toggle from '../JobFlow/Components/Buttons/ToggleButton/Toogle'
import Footer from './Components/Footer/Footer'
import PlainInput from './Components/InputBoxes/Plain/TextFieldPlain'
import DoubleRangeSlider from './Components/InputBoxes/Range/Range'
import ChipGroup from './Components/InputBoxes/ChipGroup/ChipGroup'
import TopNav from './Components/Navbar/TopNavBar'
import NavBar from './Components/MainNavBar/NavBar'

const JobForm = () => {
    const PageTitle = ['Basic Information','Add Compensation','Important Info','Finalize']
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    const optionsText = [
        {value: 'value-1', text: 'Under Graduate'},
        {value: 'value-2', text: 'Post Graduate'},
        {value: 'value-3', text: 'Diploma'}
    ];
  const [formData,setFormData] = useState({
        id: timestamp,
        jobTitle: "",
        jobOpening:0,
        state:'',
        city:'',
        jobType:'',
        DueDate:'',
        jobField:'',
        workExp : '',
        jobLevel: '',
        pay: '',
        benefits: [],
        minReq : {
                    Req1:'',
                    Req2:'',
                    Req3:'',
                    Req4:'',
                    Req5:'',
                    Req6:''
                 },
        jobDesc : '',         
        skills: [],
        preferances : {
            candidatesWillingToRelocate : true,
            experiencedCandidates : true,
            skillBadgePreferance : true,
            profileCompletion: true,
            skillExp : {
                skillName:"",
                exp : ''
            },
            priorityLoc : '',
            appliedBefore : '',
        },
        recruiterEmail: '',
        orgLinkedIn: '',
        sharePolicies : true,
        contactAllowance: true,
        lighteningStatus: {
            lightening: false,
            tilldate : "",
            hiresNumber : '',
            adBudget: {
                type:'Daily',
                Amount:'813'
            },
            duration:"Run Continously",
            location:'Mumbai',
            estimatedresults:{
                impressions:'20k',
                clicks :'12k',
                applications:'500+'
            },
            finalPrice:'6400',
            payStatus:''

        }

  });
  const[page,setPage] = useState(1);
  const[Requirement,setReq]=useState({})

  const handleChange=(e)=>{
    const { name, value,type, checked } = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked: value, 

            }
        },
        console.log(formData))
  }
  const handlePrefChange=(e)=>{
    const { name, value,type, checked } = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                preferances:{
                    ...prevFormData.preferances,
                    [name]: type === 'checkbox' ? checked: value,    
                }
            }
        },
        console.log(formData))
  }
  const handleSkillPrefChange=(e)=>{
    const { name, value } = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                preferances:{
                    ...prevFormData.preferances,
                    skillExp:{
                        ...prevFormData.preferances?.skillExp,
                        [name]: value,  
                    }     
                }
            }
        },
        console.log(formData))
  }

  const options = ['Provident Fund', 'Rent Allowance', 'Stocks', 'Medical Insuarance', 'Wifi Allowance', 'Travel Allowance','Incentives', 'Flexible Hours','Provident Fund2', 'Rent Allowance2', 'Stocks2', 'Medical Insuarance2', 'Wifi Allowance2', 'Travel Allowance2','Incentives2', 'Flexible Hours2'];
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [minValue, setMinValue] = useState(55);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinChange = (e) => {
    const newMinValue = parseInt(e.target.value);
    setMinValue(newMinValue)
    setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: `${newMinValue}-${maxValue}`,
      }));
      console.log(formData)
  };

  const handleMaxChange = (e) => {
    const newMaxValue = parseInt(e.target.value);
    setMaxValue(newMaxValue)
    setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: `${minValue}-${newMaxValue}`,
      }));
      console.log(formData)
  };

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    setInputValue('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
    console.log(formData)
  };
  
  const [options2, setOptions] = useState(['C++','JavaScript','React.js','Java','Angular.js','Node.js','DBMS','MongoDB','Express.js','MERN','Android','Flutter','React Native','Html CSS','No Sql', 'Data Structures','Algorithms']);
  const handleAddSkills = (e) =>{
      const value = e.target.value;
      
      setOptions(
          [...options2, value]
      )
      setFormData((prevFormData)=>{
        return{
            ...prevFormData,
            skills:[options2]
        }
      })
  }
  const handleReq = (e) => {
    const { name, value } = e.target;
    setReq((prevRequirement) => ({
      ...prevRequirement,
      [name]: value,
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      minReq: {
        ...prevFormData.minReq,
        [name]: value,
      },
    }));
    console.log(formData)
  };

const handleTextArea = (e) =>{
    const {name,value} = e.target;
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      console.log(formData)
    }  
    
  return (
    <>
    <NavBar/>
    <div className='PostJobForm'>
        <div>
            <TopNav/>
        </div>
        <div className="header">
            <Header
                Title = {PageTitle[page-1]}
                vectorImg = {imgHeader1}
                page = {page}
            />
        </div>
        <form className="formBody">
              {page === 1 ? (
                  <div className='Page1'>
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
                  </div>
              ) : <div />}
              {page === 2 ? (
                  <div className='Page2'>
                      <div className="Sec1">
                          <div className='Sec1Left'>
                              <div className='InputFieldX'>
                                  <label htmlFor="optionInput">Set Pay as:</label>
                                  <select id="optionInput" value={selectedOption} onChange={handleOptionChange}>
                                      <option value="">-- Select Option --</option>
                                      <option value="range">Range(in Thousands)</option>
                                      <option value="number">Number</option>
                                  </select>
                              </div>
                          </div>
                          <div className='Sec1Right'>
                              <div className='InputFieldX'>
                                  {selectedOption === 'range' ? (
                                      <div className='SecRightInput'>
                                          <DoubleRangeSlider
                                              minValue={minValue}
                                              maxValue={maxValue}
                                              onMinChange={handleMinChange}
                                              onMaxChange={handleMaxChange}
                                          />
                                      </div>
                                  ) : (
                                      <div className='SecRightInput'>
                                          <label htmlFor="valueInputNumber">Input Salary</label>
                                          <input id="valueInputNumber" type="number" name='pay' value={formData.pay} onChange={handleInputChange} placeholder='50000'/>
                                      </div>
                                  )}
                              </div>
                          </div>
                      </div>
                      <div className="Sec2">
                          <div className='Sec2Left'>
                              <PlainInput
                                  id="BenefitAdd"
                                  type="text"
                                  placeholder="Type here.."
                                  label="Add Benefits"
                              />
                          </div>
                          <div className='Sec2Right'>
                          <ChipGroup options={options} setFormData={setFormData} name='benefits'/>
                          </div>
                      </div>
                  </div>
              ) : <div />}
              {page === 3 ? (
                  <div className='Page3'>
                      <div className="Sec1">
                          <div className="Sec1Left">
                              <label htmlFor="xx" >Enter Minimum Requirements</label>
                              <div className="InpGroup" id="xx">
                                  <div className="col1">
                                      <PlainInput
                                          id="Req1"
                                          type="text"
                                          name='Req1'
                                          value={formData.minReq.Req1}
                                          onChange={handleReq}
                                          placeholder="Enter Requirement 1"
                                      />
                                      <PlainInput
                                          id="Req2"
                                          type="text"
                                          name='Req2'
                                          value={formData.minReq.Req2}
                                          onChange={handleReq}
                                          placeholder="Enter Requirement 2"
                                      />
                                      <PlainInput
                                          id="Req3"
                                          type="text"
                                          name='Req3'
                                          value={formData.minReq.Req3}
                                          onChange={handleReq}
                                          placeholder="Enter Requirement 3"
                                      />
                                  </div>
                                  <div className="col2">
                                      <PlainInput
                                          id="Req4"
                                          type="text"
                                          name='Req4'
                                          value={formData.minReq.Req4}
                                          onChange={handleReq}
                                          placeholder="Enter Requirement 3"
                                      />
                                      <PlainInput
                                          id="Req5"
                                          type="text"
                                          name='Req5'
                                          value={formData.minReq.Req5}
                                          onChange={handleReq}
                                          placeholder="Enter Requirement 4"
                                      />
                                      <PlainInput
                                          id="Req6"
                                          type="text"
                                          name='Req6'
                                          value={formData.minReq.Req6}
                                          onChange={handleReq}
                                          placeholder="Enter Requirement 5"
                                      />
                                  </div>
                              </div>

                          </div>
                          <div className="Sec1Right">
                              <label htmlFor="TextArea">Enter Job Description</label>
                              <textarea name="jobDesc" id="TextArea" cols="30" rows="10" placeholder="Max 500 characters.." maxLength={1000} value={formData.jobDesc} onChange={handleTextArea}></textarea>
                          </div>
                      </div>
                      <div className="Sec2">
                          <div className='Sec2Left'>
                              <PlainInput
                                  id="AddReqSkills"
                                  type="text"
                                  name='skills'
                                  value={''}
                                  onChange={handleAddSkills}
                                  placeholder="Type and Enter"
                                  label="Add Required Sklls"
                              />
                          </div>
                          <div className='Sec2Right'>
                              <ChipGroup options={options2} setFormData={setFormData} name='skills' />
                          </div>
                      </div>
                  </div>
              ) : <div />}
              {page === 4 ? (
                  <div className='Page4'>
                      <div className='Sec1'>
                          <div className='Sec1Left'>
                              <PlainInput
                                  id="rECRUITEReMAIL"
                                  type="email"
                                  name ='recruiterEmail'
                                  onChange={handleChange}
                                  value={formData.recruiterEmail}
                                  placeholder="xyz@Domain.com"
                                  label="Recruiter's Email Address"
                              />
                              <PlainInput
                                  id="RecruiterLinkedin"
                                  onChange={handleChange}
                                  name='orgLinkedIn'
                                  value={formData.orgLinkedIn}
                                  type="url"
                                  placeholder="www.linkedin.com/in/..."
                                  label="Recruiter's Linkedin"
                              />
                          </div>
                          <div className='Sec1Mid'>
                              <p id='prefExp'>
                                  At Least<br />
                                  <div className='yrsExpPref'>
                                      <span>
                                          <PlainInput
                                              id="yrsExpPref"
                                              type="number"
                                              name='exp'
                                              onChange={handleSkillPrefChange}
                                              value={formData.preferances.skillExp.exp}
                                              placeholder='0'
                                          />
                                      </span>
                                  </div>
                                  of<br />
                                  <span>
                                      <select name='skillName' className='selectbox' value="value-2" onChange={handleSkillPrefChange}>
                                          {formData.skills.map(item => {
                                              return (<option key={item} value={formData.preferances.skillExp.skillName} >{item}</option>);
                                          })}
                                      </select>
                                  </span>
                              </p>
                              <p id='prefExp2'>
                                  Prefer Highest Education as
                                  <select className='selectbox' value="value-2" name='HighestEd' onChange={handlePrefChange}>
                                      {optionsText.map(item => {
                                          return (<option key={item.value} value={item.value}>{item.text}</option>);
                                      })}
                                  </select>
                              </p>
                          </div>
                          <div className='Sec1Right'>
                              <PlainInput
                                  id="LocPref"
                                  type="text"
                                  name='priorityLoc'
                                  placeholder="Mumbai"
                                  onChange={handlePrefChange}
                                  label="Location Preferance"
                              />
                              <PlainInput
                                  id="AppDeadline"
                                  type="date"
                                  name='appliedBefore'
                                  placeholder="15/07/2003"
                                  onChange={handlePrefChange}
                                  label="Set Application Deadline"
                              />
                          </div>
                      </div>
                      <div className='Sec2'>
                          <div className='Col1'>
                              <Toggle label='Candidates willing to Relocate' handlePrefChange={handlePrefChange} name='candidatesWillingToRelocate' value={formData.preferances.candidatesWillingToRelocate}/>
                              <Toggle label='Experienced Candidates' handlePrefChange={handlePrefChange} name='experiencedCandidates' value={formData.preferances.experiencedCandidates}/>
                              <Toggle label='Skill Badge Preferance' handlePrefChange={handlePrefChange} name='skillBadgePreferance' value={formData.preferances.skillBadgePreferance}/>
                          </div>
                          <div className='Col2'>
                              <Toggle label='Profile Collection' handlePrefChange={handlePrefChange} name='profileCompletion' value={formData.preferances.profileCompletion}/>
                              <Toggle label='Share Organisational Policies' handlePrefChange={handleChange} name='sharePolicies' value={formData.sharePolicies} />
                              <Toggle label='Allow Candidate to Contact' handlePrefChange={handleChange} name='contactAllowance' value={formData.contactAllowance}/>
                          </div>
                      </div>
                  </div>
              ) : <div />}
          </form>
          <div className="footer">
              <Footer
                
                  primary="Next"
                  next = {()=>setPage(page+1)}
                  back = {()=>setPage(page-1)}
                  secondary1="Back"
                  secondary2="Discard"
              />
          </div>
    </div>
    </>
  )
}

export default JobForm
