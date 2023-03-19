import PropTypes from 'prop-types'

function TodoListComponentV3 ({
  todos,
  deleteTodo
}) {
  return (
    <ul style={{ marginTop: '24px' }}>
      {(todos).map(((item, index) => (
        <li key={index}>
          <span>id: {item.id}, {item.text}</span>
          <span>
            <button onClick={() => deleteTodo(item.id)}>
              [ x ]
            </button>
          </span>
        </li>
      )))}
    </ul>
  )
}

TodoListComponentV3.propTypes = {
  deleteTodo: PropTypes.func
}

export default TodoListComponentV3
