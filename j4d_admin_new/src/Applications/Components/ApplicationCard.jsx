import React from 'react'
import './ApplicationCard.scss'

export const ApplicationCard = () => {
  return (
    // <div id='card'>
    //     <div className='cardContent'>
    //         <div className="header">
    //             <div>
    //                 <img src="/emoji-sticker.jpg" alt="Sticker Emoji" className='personImage' />
    //                 <div className='personInfo'>
    //                     <span>Raman</span>
    //                     <span>#01FB2</span>
    //                     <span>Open to work</span>
    //                     <span>SDE - 1 | Spotify, Bangalore</span>
    //                 </div>
    //             </div>
    //             <div className="buttonContainer">
    //               <div className='call'>
    //               <div className='button'>
    //               <img src="mail.svg" alt="Mail Icon" className='button-img' />
    //               </div>
    //               <div className='button'>
    //               <img src="phone.svg" alt="Phone Icon" className='button-img' />
    //               </div>
    //               </div>
                   
    //                 <div>
    //                 <div className='status'>
    //                     Pending
    //                 </div>
    //                 </div>
                    
    //             </div>
    //         </div>
    //         <span>Bangalore, IN</span>
    //         <span>23/02/2023</span>
    //     </div>
    // </div>



     <div id='card'>
        <div className='cardContent'>
            <div className="header">
                <div className='left' style={{flexDirection: 'row'}}>
                    <div className='image'>
                    <img src="/emoji-sticker.jpg" alt="Sticker Emoji" className='personImage' />
                    </div>
                    
                    <div className='personInfo'>
                        <div className="content">
                        <span styles={{fontWeight:'bolder', fontSize:'larger'}}>
                        Raman
                        </span> <span>#01FB2</span>
                        </div>
                        <div className="content">
                        Open to work
                        </div>
                        <div className="content">
                        SDE - 1 | Spotify, Bangalore
                        </div>
                        
                    </div>
                </div>
                <div className="buttonContainer">
                  <div className='call'>
                  <div className='button'>
                  <img src="" alt="M" className='button-img' />
                  </div>
                  <div className='button'>
                  <img src="" alt="P" className='button-img' />
                  </div>
                  </div>
                   
                    <div className='a'>
                    <div className='status'>
                        Pending
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className='footer'>

            <div>
            <span>Bangalore, IN</span>
            </div>

            <div>
            <span>23/02/2023</span>
            </div>
            
            </div>
           
        </div>
    </div>

  )
}
