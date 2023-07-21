import React from 'react'
import TopNav from '../Pages/JobFlow/Components/Navbar/TopNavBar'
import PlainInput from '../Pages/JobFlow/Components/InputBoxes/Plain/TextFieldPlain'
import Dropdown from '../Pages/JobFlow/Components/InputBoxes/DropDown/DropDownInput'
import "./Applications.scss"

const options1 = [
    {value: 'value-1', text: 'Open to work'},
    {value: 'value-2', text: 'text-2'},
    {value: 'value-3', text: 'text-3'}
];
const options2 = [
    {value: 'value-1', text: 'Open to work'},
    {value: 'value-2', text: 'text-2'},
    {value: 'value-3', text: 'text-3'}
];

export const Applications = () => {
  return (
    <div>
        <TopNav/>
        <section id='all-applications'>
            <h2>ALL APLLICATIONS</h2>
            <div className='specs'>
            <PlainInput
                            id = "applicant-name"
                            type = "search"
                            name = 'applicant-name'
                            placeholder="Search"
                            label ="Applicant's Name"
            />
            <PlainInput
                            id = "applicant-id"
                            type = "text"
                            name = 'applicant-id'
                            placeholder="#ApplicantID"
                            label ="Applicant's ID"
            />
                <div className='InputFieldPlain'>
                <label htmlFor="">Working Status</label>
                    <select className='textInput' value="value-1" onChange={''}>
                            {options1.map(item => {
                                return (<option key={item.value} value={item.value}>{item.text}</option>);
                            })}
                        </select>
                </div>
                <div className='InputFieldPlain'>
                    <label htmlFor="">Applications Status</label>
                    <select className='textInput' value="value-1" onChange={''}>
                            {options2.map(item => {
                                return (<option key={item.value} value={item.value}>{item.text}</option>);
                            })}
                    </select>
                </div>
            <PlainInput
                            id = "applicant-name"
                            type = "search"
                            name = 'applicant-name'
                            placeholder="Bangalore, IN"
                            label ="Location"
            />
            <PlainInput
                            id = "applicant-name"
                            type = "search"
                            name = 'applicant-name'
                            placeholder="23/03/2023"
                            label ="Applied Date"
            />
            </div>
        </section>
    </div>
  )
}
