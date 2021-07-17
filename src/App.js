import { useState } from "react";
import React from 'react';
import "./bootstrap.css";
import "./App.css";
import Card from './Card'


function App() {
  const [takeInput, settakeInput] = useState({takeHeading:'', takeContent:'', takeDatetime:'', takeColor:''});
  const [pushInput, setpushInput] = useState([]);

  function addCard(){
    if(takeInput.takeHeading===''){alert('Provide Heading')}
    else if(takeInput.takeContent===''){alert('Provide Content')}
    else if(takeInput.takeDatetime===''){alert('Provide Date')}
    else if(takeInput.takeColor===''){alert('Provide Color')}
    else{setpushInput(oldInputs =>{ return [...oldInputs, takeInput]});}
  }

  function deletecard(getindex){
    var updatecard=pushInput.filter((ele,index)=>{return getindex!==index});
    setpushInput(updatecard);
  }

  function clearAll(){
    setpushInput([]);
  }

  return (
    <>
        <div className="container bg-gradient">
          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="PoemHeading">Poem Heading</label>
              <input type="text" className="form-control" id="PoemHeading" placeholder="Type here..." value={takeInput.takeHeading} onChange={(args)=>{settakeInput({...takeInput, takeHeading:args.target.value})}} />
            </div>
            <div className="form-group col-6">
              <label htmlFor="PoemContent">Poem Content</label>
              <textarea type="text" className="form-control" id="PoemContent" placeholder="Type here..." onChange={(args)=>{settakeInput({...takeInput, takeContent:args.target.value})}} />
            </div>
          </div>
          <br />
          <div className="row ">
            <div className="form-group col-4">
              <input type="date" className="form-control" onChange={(args)=>{settakeInput({...takeInput, takeDatetime:args.target.value})}} />
            </div>
            <div className="form-group col-2">
                <input type="color" className="form-control"  onChange={(args)=>{settakeInput({...takeInput, takeColor:args.target.value})}}  />
            </div>
            <div className="form-group col-2">
              <button className="col-lg-12 btn btn-primary" onClick={addCard}> Add </button>
            </div>
            <div className="form-group col-2">
              <button className="col-lg-12 btn btn-info" type="reset" > Delete </button>
            </div>
            <div className="form-group col-2">
              <button className="col-lg-12 btn btn-secondary" type="reset" onClick={clearAll}> Delete All </button>
            </div>
          </div>
        </div>
      <div className="container bg-gradient d-flex flex-wrap" style={{ height:'auto', color:'white'}}>
      { pushInput.map( (args,index) => 
       
        <Card onSelect={(e)=>deletecard(e.index)} key={index} heading={args.takeHeading} content={args.takeContent} datetime={args.takeDatetime} color={args.takeColor} />
     )}
       </div>
  </>
  );
}

export default App;
