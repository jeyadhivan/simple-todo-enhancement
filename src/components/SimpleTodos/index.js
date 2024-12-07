import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

class SimpleTodo extends Component {
  state = {
    todos: initialTodosList,
    task: '',
  }

  deleteTodo = id => {
    const {todos} = this.state
    const filteredTodos = todos.filter(todo => todo.id !== id)
    this.setState({todos: filteredTodos})
  }

  onClickAddButton = () => {
    const {task, todos} = this.state
    if (task.trim() === '') return

    const parts = task.split(' ')
    const count = parseInt(parts[parts.length - 1], 10)

    const newTodos = []
    if (!Number.isNaN(count)) {
      const title = parts.slice(0, -1).join(' ')
      for (let i = 0; i < count; i += 1) {
        newTodos.push({id: new Date().getTime() + i, title})
      }
    } else {
      newTodos.push({id: new Date().getTime(), title: task})
    }

    this.setState({todos: [...todos, ...newTodos], task: ''})
  }

  onChangeInput = event => {
    this.setState({task: event.target.value})
  }

  saveEdit = (id, newTitle) => {
    const {todos} = this.state
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, title: newTitle} : todo,
    )
    this.setState({todos: updatedTodos})
  }

  toggleComplete = id => {
    const {todos} = this.state
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todos: updatedTodos})
  }

  render() {
    const {todos, task} = this.state
    return (
      <div className="simple-todo-container">
        <h1 className="heading">Simple Todos</h1>
        <input
          type="text"
          value={task}
          onChange={this.onChangeInput}
          placeholder="Add a new task"
        />
        <button
          type="button"
          className="delete-button"
          onClick={this.onClickAddButton}
        >
          Add
        </button>
        <ul className="todos-list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={this.deleteTodo}
              saveEdit={this.saveEdit}
              toggleComplete={this.toggleComplete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodo
