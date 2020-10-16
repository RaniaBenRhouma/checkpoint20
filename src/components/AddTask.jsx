import React, { useState } from 'react';
import { useDispatch } from "react-redux";

const AddTask = (props) => {

 const [taskk, setTaskk] = useState('');

 const handleInputChange = function(e) {
    setTaskk(e.target.value);
 }

 const dispatch = useDispatch();

    return ( 
        <div className= "inputTasks">
          <input type="text" placeholder="Please enter a task" onChange={handleInputChange} />
          <p onClick={() => dispatch({ type: "ADD" , value:taskk })}> Add </p>   

        </div>
     );
}
 
export default  AddTask ;