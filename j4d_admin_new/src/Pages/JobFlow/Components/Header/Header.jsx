import React from "react";
import "./Header.scss"


let Header = (props) =>{
    let page = parseInt(props.page);
    let width = "100%";
    if(page === 2){
        width ="50%"
    }else if(page === 3){
        width ="75%"
    }else if(page === 4){
        width ="100%"
    }else{
        width ="25%"
    }
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
                <div className="seekbarHeader" id="seek" style={width={width}}></div>
            </div>            
        </div>
    );
}

export default Header;