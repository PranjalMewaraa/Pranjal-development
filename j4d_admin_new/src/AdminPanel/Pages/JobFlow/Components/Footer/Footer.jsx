//import "./Footer.scss"
import {Routes, Route, useNavigate} from 'react-router-dom';
const Footer =(props)=>{
    const nxtpage =props.next
    const backbtn = props.back
    const navigate = useNavigate();
    
    return(
        <div className="FooterComp">
            <div className="Fleft">
                <button className="SecondaryButton" onClick={backbtn}>{props.secondary1}</button>
            </div>
            <div className="Fright">
                <button className="SecondaryButton">{props.secondary2}</button>
                <button className="primaryButton" onClick={nxtpage}>{props.primary}</button>
            </div>
        </div>
    )
}
export default Footer