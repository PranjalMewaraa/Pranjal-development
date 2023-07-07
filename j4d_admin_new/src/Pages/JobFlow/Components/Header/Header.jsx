import React from "react";
import "./Header.scss"


let Header = (props) =>{
    return(
        <div className="J4D-Admin-Header">
            <div className="J4D-Admin-Header-TOP">
                <div className="J4D-Admin-Header-left">
                    <h1 id="headerTitle">{props.Title}</h1>
                </div>
                <div className="J4D-Admin-Header-right">
                    <img className="vectorImgHeader" src={props.vectorImg} alt="" />
                </div>
            </div>
            <div className="J4D-Admin-Header-BoTTom">
                <div className="seekbarHeader"></div>
            </div>            
        </div>
    );
}

export default Header;