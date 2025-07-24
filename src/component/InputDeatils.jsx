// import React, { useState } from "react";

// const InputDeatils = ({AddingNewOnclick, handleEditButton, editData}) => {

//     const [name, setName] = useState("");
//     const [date, setDate] = useState("");
//     console.log(handleEditButton)

//     const handleOnAdd = ()=>{
//         console.log("Value of name and age is " + name + " " + date);
//         AddingNewOnclick(name, date);
//         setName("");
//         setDate("");
//     }

//     const handleOnEdit = (name1, date1)=>{
//         console.log(name, date)
//         AddingNewOnclick(name1, date1);
//         setName("")
//         setDate("")
//     }

//     const handleOnChangeName = (e)=>{
//         console.log(e.target.value)
//         setName(e.target.value);
//     }
    
//     const handleOnChangeDate = (e)=>{
//         console.log(e.target.value)
//         setDate(e.target.value);
        
//     }

//   return (
//     <div>
//       <div className="container text-center">
//         <div className="row align-items-start">
//           <div className="col">
//             <input type="text" placeholder="Name"
//             value={name}
//             onChange={handleOnChangeName}
//             />
//           </div>
//           <div className="col">
//             <input type="date"
//             value={date}
//             onChange={handleOnChangeDate}
//             />
//           </div>
//           <div className="col">
//             {handleEditButton ? <button type="button" className="btn btn-success" onClick={()=>handleOnEdit(editData.Name, editData.Date)}>
//               Update
//             </button> : <button type="button" className="btn btn-primary" onClick={handleOnAdd}>
//               Add
//             </button>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InputDeatils;


import React, { useState, useEffect } from "react";

const InputDeatils = ({ AddingNewOnclick, handleEditButton, editData }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (handleEditButton) {
      setName(editData.Name || "");
      setDate(editData.Date || "");
    }
  }, [editData, handleEditButton]);

  const handleOnAdd = () => {
    AddingNewOnclick(name, date);
    setName("");
    setDate("");
  };

  const handleOnEdit = () => {
    AddingNewOnclick(name, date);
    setName("");
    setDate("");
  };

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <div className="container text-center">
        <h4 style={{marginBottom: "1.5rem", color: "#0d6efd"}}>{handleEditButton ? "Edit Todo" : "Add New Todo"}</h4>
        <div className="row align-items-start">
          <div className="col">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleOnChangeName}
            />
          </div>
          <div className="col">
            <input
              type="date"
              value={date}
              onChange={handleOnChangeDate}
            />
          </div>
          <div className="col">
            {handleEditButton ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={handleOnEdit}
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleOnAdd}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDeatils;
