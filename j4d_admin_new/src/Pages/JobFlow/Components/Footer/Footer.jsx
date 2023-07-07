import "./Footer.scss"

const Footer =(props)=>{
    return(
        <div className="FooterComp">
            <div className="Fleft">
                <button className="SecondaryButton">{props.secondary1}</button>
            </div>
            <div className="Fright">
                <button className="SecondaryButton">{props.secondary2}</button>
                <button className="primaryButton">{props.primary}</button>
            </div>
        </div>
    )
}
export default Footer