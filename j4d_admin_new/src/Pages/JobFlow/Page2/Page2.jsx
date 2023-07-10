import Header from '../Components/Header/Header';
import DoubleRangeSlider from '../Components/InputBoxes/Range/Range';
import TopNav from '../Components/Navbar/TopNavBar'
import './Page2.scss'
import Footer from '../Components/Footer/Footer'
import vector from '../Assets/vectorP1.png'
import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import PlainInput from '../Components/InputBoxes/Plain/TextFieldPlain';
import ChipGroup from '../Components/InputBoxes/ChipGroup/ChipGroup';

const Page2 = () => {
    const navigate = useNavigate()
    const options = ['Provident Fund', 'Rent Allowance', 'Stocks', 'Medical Insuarance', 'Wifi Allowance', 'Travel Allowance','Incentives', 'Flexible Hours','Provident Fund', 'Rent Allowance', 'Stocks', 'Medical Insuarance', 'Wifi Allowance', 'Travel Allowance','Incentives', 'Flexible Hours'];
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

    return (
        <div className="Page2">
            <div className="TopNav"><TopNav/></div>
            <div className='Header'> <Header Title = 'Add Compensation' vectorImg = {vector} page = "2"/> </div>
            <div className="Sec1">
                <div className='Sec1Left'>
                    <div className='InputFieldX'>
                    <label htmlFor="optionInput">Set Pay as:</label>
                    <select id="optionInput" value={selectedOption} onChange={handleOptionChange}>
                        <option value="">-- Select Option --</option>
                        <option value="range">Range</option>
                        <option value="number">Number</option>
                    </select>
                    </div>
                </div>
                <div className='Sec1Right'>
                <div className='InputFieldX'>
                    {selectedOption === 'range' ? (
                        <div className='SecRightInput'> <DoubleRangeSlider/> </div> 
                    ) : (
                        <div className='SecRightInput'>
                            <label htmlFor="valueInputNumber">Input Salary</label>
                            <input id="valueInputNumber" type="number" value={inputValue} onChange={handleInputChange} placeholder='50000'/>
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
                    <ChipGroup options={options}/>
                </div>
            </div>
            <div className="Footer">
            <Footer
                    primary="Next"
                    primaryOnclick={() => {
                        console.log('clicked')
                        navigate('/postjob/importantInfo')
                    }}
                    secondary1="Back"
                    secondary1Onclick={()=>{
                        navigate('/postjob/basicInfo')
                    }}
                    secondary2="Discard"
                    secondary2Onclick={''}
                />
            </div>
        </div>
    )
}
export default Page2