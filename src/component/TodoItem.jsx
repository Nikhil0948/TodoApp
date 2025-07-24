const TodoItem = ({item, onDeleteClick, onEditClick}) => {

  return (
    <>
      <div className="todo-item-row">
          <div className="col">{item.Name}</div>
          <div className="col">{item.Date}</div>
          <div className="col todo-actions">
            <button onClick={()=>onEditClick(item.Name)} type="button" className="btn btn-success">Edit</button>
            <button onClick={()=>onDeleteClick(item.Name)} type="button" className="btn btn-danger">Delete</button>
          </div>
      </div>
      
    </>
  );
};

export default TodoItem;
