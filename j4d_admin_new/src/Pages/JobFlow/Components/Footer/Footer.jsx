import "./Footer.scss"

const Footer =(props)=>{
    return(
        <div className="FooterComp">
            <div className="Fleft">
                <button className="SecondaryButton" onClick={props.secondary1Onclick}>{props.secondary1}</button>
            </div>
            <div className="Fright">
                <button className="SecondaryButton" onClick={props.secondary2Onclick}>{props.secondary2}</button>
                <button className="primaryButton" onClick={props.primaryOnclick}>{props.primary}</button>
            </div>
        </div>
    )
}
export default Footer


