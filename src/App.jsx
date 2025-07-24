import { useState } from "react";
import Heading from "./component/heading";
import TodoItems from "./component/TodoItems";
import InputDeatils from "./component/InputDeatils";
import MessageText from "./component/MessageText";

function App() {

  const [details, setDetails] = useState([]);
  const [editData, setEditData] = useState({})
  const [editIndex, setEditIndex] = useState(null);
  const [editButton, setEditButton] = useState(false)

  const handleAddNewDetail = (name , date)=>{
    console.log("Working: " + name + " " + date);
    if(editButton){
      const updated = [...details];
      updated[editIndex] = {Name: name, Date: date}
      setDetails(updated);
      setEditButton(false);
    }
    else{
      const newDetails = [...details, {Name: name, Date: date}];
      setDetails(newDetails);
    }
  }

  const handleDeleteClick = (name)=>{
    const newDetails = details.filter((item)=> item.Name !== name);
    setDetails(newDetails);
  }

  const handleEditClick = (name)=>{
    const detail = details.find((item)=> item.Name === name)
    const index = details.findIndex((item) => item.Name === name);
    setEditIndex(index)
    setEditButton(true)
    setEditData(detail)
    console.log(detail)
  }

  return (
    <div>
      <Heading />
      <InputDeatils AddingNewOnclick={handleAddNewDetail} handleEditButton = {editButton} editData={editData} />
      {details.length === 0 && <MessageText />}
      <TodoItems todoObj={details} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick}/>
    </div>
  );
}

export default App;
