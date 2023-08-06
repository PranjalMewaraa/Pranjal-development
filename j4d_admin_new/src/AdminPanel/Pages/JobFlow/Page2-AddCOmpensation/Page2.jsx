import Header from '../Components/Header/Header';
import DoubleRangeSlider from '../Components/InputBoxes/Range/Range';
import TopNav from '../Components/Navbar/TopNavBar'
//import './Page2.scss'
import Footer from '../Components/Footer/Footer'
import vector from '../Assets/vectorP1.png'
import React, { useState } from 'react';
import PlainInput from '../Components/InputBoxes/Plain/TextFieldPlain';
import ChipGroup from '../Components/InputBoxes/ChipGroup/ChipGroup';
import NavBar from '../Components/MainNavBar/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';

const Page2 = () => {
  const options = ['Provident Fund', 'Rent Allowance', 'Stocks', 'Medical Insuarance', 'Wifi Allowance', 'Travel Allowance','Incentives', 'Flexible Hours','Provident Fund2', 'Rent Allowance2', 'Stocks2', 'Medical Insuarance2', 'Wifi Allowance2', 'Travel Allowance2','Incentives2', 'Flexible Hours2'];
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const location = useLocation()
  const { setFormData, formData } = location.state || {};
  const navigate = useNavigate()
  const [minValue, setMinValue] = useState(55);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinChange = (e) => {
    const newMinValue = parseInt(e.target.value);
    setMinValue(newMinValue);
    setFormData((prevFormData) => ({
        ...prevFormData,
        ['pay']: `${newMinValue}-${maxValue}`,
      }));
      console.log(formData)
  };

  const handleMaxChange = (e) => {
    const newMaxValue = parseInt(e.target.value);
    setMaxValue(newMaxValue);
    setFormData((prevFormData) => ({
        ...prevFormData,
        ['pay']: `${minValue}-${newMaxValue}`,
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
    setInputValue(value);
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
    console.log(formData)
  };

 
  
    return (

        <>
        <NavBar/>
        <div className="J4D-admin-jobflow2">
            <div className="TopNav"><TopNav/></div>
            <div className='Header'> <Header Title = 'Add Compensation' vectorImg = {vector} page = "2"/> </div>
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
                            setFormData={setFormData}
                        /> 
                    </div> 
                    ) : (
                        <div className='SecRightInput'>
                            <label htmlFor="valueInputNumber">Input Salary</label>
                            <input id="valueInputNumber" type="number" name='pay' value={inputValue} onChange={handleInputChange} placeholder='50000'/>
                        </div>
                    )}
                </div>    
                </div>
            </div>
            <div className="Sec2">
                <div className='Sec2Left'>
                    <PlainInput
                        id = "BenefitAdd"
                        type = "text"
                        placeholder="Type here.."
                        label ="Add Benefits"
                    />
                </div>
                <div className='Sec2Right'>
                    <ChipGroup options={options} setFormData={setFormData}/>
                </div>
            </div>
            <div className="Footer">
            <Footer
                    primary="Next"
                    next = {()=>{
                        navigate('/postjob/important-info', { state: { setFormData,formData } });
                    }}
                    secondary1="Back"
                    secondary2="Discard"
                />
            </div>
        </div>
        </>
        
    )
}
export default Page2