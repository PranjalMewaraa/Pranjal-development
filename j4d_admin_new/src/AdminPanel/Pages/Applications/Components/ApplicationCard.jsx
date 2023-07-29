import React from 'react'

import profilepic from './PP.png'
import call from './callBtn.png'
import mail from './mailBtn.png'
import loc from './locIcon.png'

export const ApplicationCard = (props) => {
  return (
    <div className='Application-card'>
      <div className='AppCardHeader'>
          <div className='Header-real-left'>
          <div className='Header-left'>
            <img src={props.logo} alt="applicant-profile-image" />
          </div>
          <div className='Header-Mid'>
            <p className='p' id='name'>{props.name} <span style={{color:'#4E6675'}}> {props.id}</span></p>
            <p className='p' id='workStatus'>{props.workStatus}</p>
            <p className='p' id='appliedfor'>{props.appliedFor+ " | " +props.Company}</p>
          </div>
          </div>
          
          <div className='Header-Right'>
            <div className='SectionUp'>
                <button className='btnimgappcard' id='CallBtn'>
                  <img src={call} alt="" />
                </button>
                <button className='btnimgappcard' id='CallBtn'>
                  <img src={mail} alt="" />
                </button>
            </div>
            <div className='SectionDown'>
              <p className='p' id='appStatus'>{props.appStatus}</p>
            </div>
          </div>
      </div>
      <div className='AppCard-Footer'>
        <div className='FooterLeft'>
          <p className='p'><span><img src={loc} alt="" /></span> {props.location}</p>
        </div>
        <div className='FooterRight'><p className='p'>{props.dateApplied}</p></div>
      </div>
    </div>

  )
}


