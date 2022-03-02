import React from "react";
import "./menu-item.style.scss"
import {withRouter,useHistory} from 'react-router-dom'
function MenuItem({title,image,size,linkUrl,match}) {
    const history = useHistory()
    return(
       <div className = {`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
           <div div style={{
           backgroundImage:`url(${image})`}}  
           className="background-image"/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
       </div>
    )
}

export default withRouter(MenuItem);