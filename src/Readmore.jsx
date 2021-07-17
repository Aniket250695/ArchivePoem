import React,{useState} from 'react';

function App() {
  const [takeInput,settakeInput]=useState([]);
  const [expand, setexpand] = useState(takeInput);
  const [isReadMore, setIsReadMore] = useState(true);
    
  const inputHandler = () => {
    setexpand(takeInput);
  }

  function toggler(){
    setIsReadMore(!isReadMore);
  }

  return (
    <div >
      <textarea onChange={(e)=>{settakeInput(e.target.value)}}/><br/>
      <button onClick={inputHandler}>Add</button>
      <p>{isReadMore ? expand.slice(0,10): expand}
        <span style={{cursor:'pointer'}} onClick={toggler} >{isReadMore ? "...read more" : "show less"}</span>
      </p>
    </div>
  );
}

export default App;