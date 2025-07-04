import './index.css'
import {useState} from 'react'

function TodoItem({todo, deleteTodo, saveEdit, toggleComplete}) {
  const {id, title, completed} = todo
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(title)

  const onDelete = () => {
    deleteTodo(id)
  }

  const onEdit = () => {
    setIsEditing(true)
  }

  const onSave = () => {
    saveEdit(id, editValue)
    setIsEditing(false)
  }

  const handleEditChange = event => {
    setEditValue(event.target.value)
  }

  const onToggleComplete = () => {
    toggleComplete(id)
  }

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <li className="cont">
        <div className="title-card">
          <input
            type="checkbox"
            checked={completed}
            onChange={onToggleComplete}
            className="check-box"
          />
          {isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={handleEditChange}
              className="edit-input"
            />
          ) : (
            <p className="todo-title">{title}</p>
          )}
        </div>
        <div className="btn-card">
          {isEditing ? (
            <button className="delete-button" onClick={onSave} type="button">
              Save
            </button>
          ) : (
            <button className="delete-button" onClick={onEdit} type="button">
              Edit
            </button>
          )}
          <button className="delete-button" onClick={onDelete} type="button">
            Delete
          </button>
        </div>
      </li>
    </div>
  )
}

export default TodoItem
