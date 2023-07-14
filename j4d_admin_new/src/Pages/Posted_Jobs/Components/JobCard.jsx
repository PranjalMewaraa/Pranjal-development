import save from './bookmarkOPen.png'
import saved from './bookmrkClose.png'
import './JobCard.scss'
import edit from './editbtn.png'
import { useState } from 'react'
const JobCard = (props) => {

    let bookmark;
    const[bookmarkStatus,setBookmark] = useState(props.save)

    if(bookmarkStatus === 'true'){
        bookmark = saved;
    }else if(bookmarkStatus=== 'false'){
        bookmark = save;
    }

    const handleClick =(e)=>{
        bookmarkStatus === 'true' ? setBookmark('false') : setBookmark('true')
    }

    return (
        <div className="JobCard">
            <div className="Card-Header">
                <div className="header-left">
                    <img src={props.logo} alt="logo" />
                </div>
                <div className="header-right">
                    <div className="div1">
                        <p id='loc'><span></span>{props.location}</p>
                        <p id='role'>{props.jobRole}</p>
                    </div>
                    <div className="div2">
                        <img src={bookmark} alt="bookmark" onClick={handleClick} />
                        <p id='time'><span></span>{props.time}D left</p>
                    </div>
                </div>
            </div>
            <div className="Card-Body">
                <p style={{color:'#008FE7', fontWeight:'bolder', fontSize:'larger'}}>{props.salary}</p>
                <div className='desc'><p id='desc'>{props.desc}</p></div> 
                <p>Opening Jobs {props.Hired}/{props.TotalOpening}</p>
                <div className='seek'><div className='seekfull'></div></div>
            </div>
            <div className="Card-Footer">
                <img src={edit} style={{padding:'0.25rem'}} alt="" />
                <button className='SecondaryButton' id='delbtn'>Delete</button>
                <button className='primaryButton' id='viewbtn'>Applications</button>
            </div>
        </div>
    ) 
}

export default JobCard