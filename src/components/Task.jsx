import React, { useState } from 'react';
import { useDispatch } from "react-redux";

const Task = (props) => {

    const[editState,setEditState]=useState(false);

    const [editedTaskk, setEditedTaskk] = useState('');

    const dispatch = useDispatch();


    const handleEditedInputChange = function(e) {
       setEditedTaskk(e.target.value);
    }
   
//THUNK
    function FinishEditing() {
        // this one is a "thunk" because it defers work for later:
        return function thunk(dispatch, getState) {
          // it can be named, or anonymous
          setEditState(false);

          dispatch({ type: "EDIT" , valueID:props.TheElement.id , valueEdited:editedTaskk });
        };
       }
       
    return ( 
        
        <div  className="taskDiv"  key={props.TheElement.id} ondblclick={()=> setEditState(true)}>

           <div className={`${editState? "editform" : "none" }`}>
            <input type="text" value={props.TheElement.description} onChange={handleEditedInputChange} />
            <p onClick={() =>FinishEditing()}>Finish</p>
           </div>

            <p className={`${editState? "none" : "taskDescript" }`}>{props.TheElement.description}</p>
            <p style={{color:`${ props.TheElement.isDone? green : gray}`}} onClick={()=>dispatch({ type: "TOGGLEisDONE" , valueID:props.TheElement.id })}><i class="far fa-check-circle"></i></p>
        </div>
                //  onClick icon ontoggle isDone state
                // ondouble clik the div of task the input appear 
                // on click finish (setEditState) =false and send the new description in the input  dispatched
     );
}
 
export default Task;