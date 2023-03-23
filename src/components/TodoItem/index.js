import './index.css'

const TodoItem = props => {
  const {todoDetails, getDeleteButton} = props
  const {id, title} = todoDetails

  const deleteItemButton = () => {
    getDeleteButton(id)
  }

  return (
    <li className="list-item">
      <p className="title-text">{title}</p>
      <button type="button" className="button" onClick={deleteItemButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
