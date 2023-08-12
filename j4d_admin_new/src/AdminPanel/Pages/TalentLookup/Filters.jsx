import React from 'react'
import "./Filters.scss";
import { RxCross1 } from "react-icons/rx";
import { BsFillCircleFill } from "react-icons/bs";

export default function Filters() {
    return (
        <>
            <div className='main'>

                <div className='job-post-section'>
                    <div><h1 className='heading'>Select the Job Post</h1></div>
                    <div className='input-section'><input className='input-section' type="text"></input></div>
                </div>

                <div className='filter-section'>
                    <div><h1 className='heading'>Filters</h1></div>
                    <div className='input-section'>
                        <input className='input-section' type="text" placeholder='Role'></input>
                        <input className='input-section' type="text" placeholder='Skils Required'></input>
                    </div>
                    <div className='filter-subsection'>
                        <div className='subpart'>
                            <div className='subpart-heading'><h2>Development</h2></div>
                            <div className="cross-btn"><RxCross1 /></div>
                        </div>
                        <div className='subpart'>
                            <div className='subpart-heading'><h2>System Design</h2></div>
                            <div className="cross-btn"><RxCross1 /></div>
                        </div>
                        <div className='subpart'>
                            <div className='subpart-heading'><h2>DSA</h2></div>
                            <div className="cross-btn"><RxCross1 /></div>
                        </div>
                    </div>
                </div>

                <div className='extra-section'>
                    <div><h1 className='heading'>Extras</h1></div>
                    <div className='input-section'><input className='input-section' type="text" placeholder='Experience Required'></input></div>
                    <div className='checklist-section'>
                        <div className='checklist-subsection'><input type="checkbox" /><span className='circle-btn'><BsFillCircleFill /></span><h3 className='list-heading'>Prioritize Skill Badge</h3> </div>
                        <div className='checklist-subsection'><input type="checkbox" /><span className='circle-btn'><BsFillCircleFill /></span><h3 className='list-heading'>Actively looking for work</h3> </div>
                        <div className='checklist-subsection'><input type="checkbox" /><span className='circle-btn'><BsFillCircleFill /></span><h3 className='list-heading'>High rated History</h3> </div>
                    </div>
                </div>

                <div className='search-btn'> <button className='search-btn'>Search</button></div>




            </div>


        </>
    )
}
