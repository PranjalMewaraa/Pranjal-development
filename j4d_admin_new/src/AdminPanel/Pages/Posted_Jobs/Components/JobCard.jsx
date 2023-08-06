import save from './bookmarkOPen.png'
import saved from './bookmrkClose.png'
import cloud from '../../../../Assets/Images/lighteningOff.png'
import thunder from '../../../../Assets/Images/LighteningOn.jpg'
import edit from './editbtn.png'
import { useState } from 'react'
import Lightening from '../../Lightening/Lightening_Page'
import { useNavigate } from 'react-router-dom'
const JobCard = (props) => {

    let PageName = props.page;
    let Ficon = {cloud};
    let Ftext = 'Activate Lightening';
    let Fclass='';
    let Ftime = '';
    let onClick='';
    const navigate=useNavigate();
    let seekArea = ''
    
    function handleLightning (){
        
         navigate('/lightening/activate');
    }
    let bookmark;
    const[bookmarkStatus,setBookmark] = useState(props.save)

    if(bookmarkStatus === 'true'){
        bookmark = saved;
    }else if(bookmarkStatus=== 'false'){
        bookmark = save;
    }
    
    if ( props.item.lighteningStatus?.lightening === true ){
         Fclass =  'Card-Footer-Lightening'
         Ficon = thunder
         Ftext = 'Activated'
         Ftime = '3days left'
    }else{
         Fclass= "Card-Footer-cloud";
         Ficon = cloud
         onClick = handleLightning
         Ftext = 'Activate Lightening'
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
                        <p id='loc'><span></span>{props.item.city},{props.item.state}</p>
                        <p id='role'>{props.item.jobTitle}</p>
                    </div>
                    <div className="div2">
                        <img src={bookmark} alt="bookmark" onClick={handleClick} />
                        <p id='time'><span></span>{props.time}D left</p>
                    </div>
                </div>
            </div>
            <div className="Card-Body">
                <p style={{color:'#008FE7', fontWeight:'bolder', fontSize:'larger'}}>{props.item.pay}</p>
                <div className='desc'><p id='desc'>{props.item.jobDesc}</p></div> 
                <div className={PageName==='ManagePostedJobs'?('seekArea'):('seekArea-hidden')}>
                <p style={{fontSize:'small',fontWeight:'700'}}>Opening Jobs {props.Hired}/{props.item.jobOpening}</p>
                <div className='seek'><div className='seekfull'></div></div>
                </div>
                
            </div>
            {PageName==='ManagePostedJobs'? (
                <div className="Card-Footer-postedjobs">
                    <img src={edit} style={{ padding: '0.25rem' }} alt="" />
                    <button className='SecondaryButton' id='delbtn'>Delete</button>
                    <button className='primaryButton' id='viewbtn'>Applications</button>
                </div>
            ):(
                <div className={Fclass}>
                    <div className='fleft' onClick={handleLightning} style={{cursor:"pointer"}}>
                        <img src={Ficon} alt="" style={{paddingLeft:'0.5rem'}} />
                        <p style={{fontWeight:'600'}}> {Ftext}</p>
                    </div>    
                    <p>{Ftime}</p>
                </div>
            )}
            
        </div>
    ) 
}

export default JobCard


