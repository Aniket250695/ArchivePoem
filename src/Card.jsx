import React, { useState } from 'react';
import './bootstrap.css';
import './App.js';
import './App.css';

function Card({id, onselect=f=>f, heading, color, content }){
  const [isReadMore, setIsReadMore] = useState(true);

    function toggler(){
    setIsReadMore(!isReadMore);
  }
  
    return(
        <>
        <div className="card card_align" style={{maxHeight: "auto", maxWidth:'330px', backgroundColor:color, margin:'10px'}}>
         <h3 className="card-header"> 
           {heading}<button onClick={()=>onselect(id)} className='pos_btn' style={{backgroundColor:color}}>x</button>
         </h3>  
         <div className="card-body">
           <p className="card-text">{isReadMore ? content.slice(0,200): content} { content.length>200?
            <span style={{cursor:'pointer', color:'yellow'}} onClick={toggler} >{ isReadMore ? ">>>read more>>>" : "<<<show less<<<"}</span>
            :''}
            </p>
            </div>
         </div>
         </>
    )
}

export default Card;