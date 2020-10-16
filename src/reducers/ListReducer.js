//reducers are a pure functions there is no need for imports
const ListReducer = (state=[{id:1, description:"Watching sunrise", isDone:false},{id:2, description:"نعمل جولة بالبسكلة", isDone:false}],action) => {
    if(action.type=="ADD"){
        return ([...state,{id:state.length+1, description:action.value, isDone:false}]);
    }
    if(action.type=="TOGGLEisDONE"){
        let isDoneState= state.filter(el=> el.id ===action.valueID).isDone;
        return (!isDoneState);
    }
    if(action.type=="EDIT"){
        let NewDesc= state.filter(el=> el.id ===action.valueID).description= action.valueEdited;
        return NewDesc;
    }
    return state
  }

 export default ListReducer;