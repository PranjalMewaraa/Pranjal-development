import React from 'react'
import './ApplicationCard.scss'

export const ApplicationCard = () => {
  return (
    <div id='card'>
        <div className='cardContent'>
            <div className="header">
                <div>
                    <img src="/emoji-sticker.jpg" alt="Sticker Emoji" className='personImage' />
                    <div className='personInfo'>
                        <span>Raman</span>
                        <span>#01FB2</span>
                        <div>Open to work</div>
                        <siv>SDE - 1 | Spotify, Bangalore</siv>
                    </div>
                </div>
                <div className="buttonContainer">
                    <div className='button'>
                        <img src="mail.svg" alt="Mail Icon" className='button-img' />
                    </div>
                    <div className='button'>
                        <img src="phone.svg" alt="Phone Icon" className='button-img' />
                    </div>
                    <div className='status'>
                        Pending
                    </div>
                </div>
            </div>
            <span>Bangalore, IN</span>
            <span>23/02/2023</span>
        </div>
    </div>
  )
}
