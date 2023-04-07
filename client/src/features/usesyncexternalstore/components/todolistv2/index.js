import PropTypes from 'prop-types'
import useTodos from '@/lib/hooks/usetodo'

function TodoListComponentV2 ({
  deleteTodo
}) {
  const { todos } = useTodos()

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

TodoListComponentV2.propTypes = {
  deleteTodo: PropTypes.func
}

export default TodoListComponentV2
