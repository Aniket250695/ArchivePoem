import { useState } from "react";
import React from 'react';
import "./bootstrap.css";
import "./App.css";
import Card from './Card';


function App() {
  const [takeInput, settakeInput] = useState({takeHeading:'', takeContent:'', takeColor:''});
  const [pushInput, setpushInput] = useState([]);

  function addCard(){
    if(takeInput.takeHeading===''){alert('Provide Heading')}
    else if(takeInput.takeContent===''){alert('Provide Content')}
    else if(takeInput.takeColor===''){alert('Provide Background-Color')}
    else{setpushInput(oldInputs =>{ return [...oldInputs, takeInput]});}
  }

  function deletecard(index){
    console.log(index);
    var updatecard=pushInput.filter((ele,getindex)=>{return getindex!==index});
    setpushInput(updatecard);
  }

  return (
    <>
        <div className="container bg-gradient">
          <h2 className='heading'>Poetry Archive</h2>
          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="PoemHeading">Poem Heading</label>
              <input type="text" className="form-control" value={takeInput.takeHeading} placeholder="Type here..." onChange={(args)=>{settakeInput({...takeInput, takeHeading:args.target.value})}} />
            </div>
            <div className="form-group col-6">
              <label htmlFor="PoemContent">Poem Content</label>
              <textarea type="text" className="form-control" value={takeInput.takeContent} placeholder="Type here..." onChange={(args)=>{settakeInput({...takeInput, takeContent:args.target.value})}} />
            </div>
          </div>
          <br />
          <div className="row ">
            <div className="form-group col-2">
                <input type="color" className="form-control" value={takeInput.takeColor}  onChange={(args)=>{settakeInput({...takeInput, takeColor:args.target.value})}}  />
            </div>
            <div className="form-group col-3">
              <button className="col-lg-12 btn btn-primary" onClick={addCard}> Add </button>
            </div>
          </div>
        </div>
        <div className="container bg-gradient d-flex flex-wrap" style={{height:'auto', color:'white'}}>
      { pushInput.map( (args, i) => 
       
        <Card onselect={deletecard} id={i} heading={args.takeHeading} content={args.takeContent} color={args.takeColor} />
       
     )}
       </div>
  </>
  );
}

export default App;
