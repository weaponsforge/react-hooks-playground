import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

function TodoListComponent ({ deleteTodo }) {
  const {ids, entities: todos } = useSelector(state => state.todos)

  return (
    <ul style={{ marginTop: '24px' }}>
      {(ids).map(((id, index) => (
        <li key={index}>
          <span>id: {todos[id].id}, {todos[id].text}</span>
          <span>
            <button onClick={() => deleteTodo(id)}>
              [ x ]
            </button>
          </span>
        </li>
      )))}
    </ul>
  )
}

TodoListComponent.propTypes = {
  deleteTodo: PropTypes.func
}

export default TodoListComponent
