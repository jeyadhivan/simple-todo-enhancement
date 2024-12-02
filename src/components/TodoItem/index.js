// Write your code here

import './index.css'

const TodoItem = ({todo, deleteTodo}) => {
  const {id, title} = todo

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <div className="todo-item">
      <li className="cont">
        <p className="todo-title">{title}</p>
        <button className="delete-button" onClick={onDelete} type="button">
          Delete
        </button>
      </li>
    </div>
  )
}

export default TodoItem
