import React from 'react';
import { useSelector } from "react-redux";
import Task from "./Task";


const ListTask = () => {
    
    const ListReducer = useSelector(state => state.ListReducer);

    const [doneClicked, setDoneClicked] = useState(false);
    const [notDoneClicked, setNotDoneClicked] = useState(false);
    const [allClicked, setAllClicked] = useState(false);

    const handleDoneChange = function() {
        setNotDoneClicked (false);
        setAllClicked(false);
        setDoneClicked(true);

    }

    const handleNotDoneChange = function() {
        setDoneClicked (false);
        setAllClicked(false);
        setNotDoneClicked(true);
    }

    const handleAllChange = function(e) {
        setDoneClicked (false);
        setNotDoneClicked(false);
        setAllClicked(true);

    
    

const returnedFig = function (){

 if (doneClicked)
 { ListReducer.filter(el=> el.isDone === true).map (element=> <Task TheElement={element} />) }
 else if (notDoneClicked)
 { ListReducer.filter(el=> el.isDone === false).map (element=> <Task TheElement={element} />) }
else
 {ListReducer.map (element=> <Task TheElement={element} />) }
}

}

    return (  
    <div>
        <div className="buttonsDoes"> 
        <p onClick={handleNotDoneChange}>Not Done</p>
        <p onClick={handleDoneChange}>Done</p>
        <p onClick={handleAllChange}> All </p>
        </div>

        <div className="returnedList">
        {()=> returnedFig()}
        </div>

    </div>
    );
}
 
export default ListTask;