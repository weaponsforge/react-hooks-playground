import PropTypes from 'prop-types'
import Page from '@/common/layout/page'

function UseSyncExternalStoreComponent ({
  todos,
  addTodo,
  deleteTodo
}) {
  return (
    <Page>
      <h2>
        UseSyncExternalStoreComponent
      </h2>

      {(todos !== undefined) &&
      <div>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              <span>{item.text}</span> &nbsp;
              <span>
                <button onClick={() => deleteTodo(item.id)}>[ X ]</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
      }

      <button onClick={() => addTodo()}>Add Todo</button>
    </Page>
  )
}

UseSyncExternalStoreComponent.propTypes = {
  todos: PropTypes.array,
  addTodo: PropTypes.func,
  deleteTodo: PropTypes.fun
}

export default UseSyncExternalStoreComponent
