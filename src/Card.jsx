import React, { useState } from 'react';
import './bootstrap.css';
import './App.js';

function Card(props){
  const [isReadMore, setIsReadMore] = useState(true);

  function toggler(){
    setIsReadMore(!isReadMore);
  }
    return(
        <>
        <div className="card" style={{ maxWidth: "295px",maxHeight: "500px", backgroundColor:props.color, margin:'10px', boxSizing:'content-box' }}>
         <h3 className="card-header">
           {props.heading} 
         </h3>
         <div className="card-body">
           <p className="card-text">{isReadMore ? props.content.slice(0,200): props.content}
            <span style={{cursor:'pointer', color:'yellow'}} onClick={toggler} >{isReadMore ? ">>>read more>>>" : "<<<show less<<<"}</span></p>
         </div>
         <h6 className="card-footer d-flex justify-content-center">
          {props.datetime}
         </h6>
         </div>
         </>
    )
}

export default Card;