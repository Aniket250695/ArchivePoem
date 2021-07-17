import './bootstrap.css'
import './App.js'

function Card(props){
    return(
        <>
        <div className="card" style={{ maxWidth: "230px",maxHeight: "300px", backgroundColor:props.color, margin:'10px' }}>
         <h3 className="card-header">
           {props.heading} 
         </h3>
         <div className="card-body">
           <p className="card-text">{props.content}</p>
         </div>
         <h6 className="card-footer d-flex justify-content-center">
          {props.datetime}
         </h6>
         </div>
         </>
    )
}

export default Card;