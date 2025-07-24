import TodoItem from "./TodoItem"


const TodoItems = ({todoObj, handleDeleteClick, handleEditClick}) => {
  return (
    <div>
        {todoObj.map((item)=> (
          <TodoItem item={item} onDeleteClick={handleDeleteClick} onEditClick={handleEditClick} key={item.Name}/>
        ))}
    </div>
  )
}

export default TodoItems