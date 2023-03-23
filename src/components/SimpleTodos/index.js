import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {initialTodoList: initialTodosList}

  deleteButton = id => {
    const {initialTodoList} = this.state
    const updatedTodolist = initialTodoList.filter(
      eachTodo => eachTodo.id !== id,
    )
    this.setState({initialTodoList: updatedTodolist})
  }

  render() {
    const {initialTodoList} = this.state
    return (
      <div className="container">
        <div className="main-container">
          <div className="bg-container">
            <h1 className="heading">Simple Todos</h1>
            <ul className="list-container">
              {initialTodoList.map(eachTodo => (
                <TodoItem
                  key={eachTodo.id}
                  todoDetails={eachTodo}
                  getDeleteButton={this.deleteButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
