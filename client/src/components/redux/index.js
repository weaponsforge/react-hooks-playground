import PropTypes from 'prop-types'
import Page from '@/common/layout/page'

function ReduxComponent ({
  todos,
  addTodo,
  deleteTodo
}) {
  return (
    <Page>
      <h2>
        Redux Toolkit
      </h2>

      <button onClick={addTodo}
        style={{ marginTop: '24px' }}>
        Add Todo
      </button>

      <ul style={{ marginTop: '24px' }}>
        {(todos).map(((item, id) => (
          <li key={id}>
            <span>id: {item.id}, {item.text}</span>
            <span>
              <button onClick={() => deleteTodo(item.id)}>
                [ x ]
              </button>
            </span>
          </li>
        )))}
      </ul>
    </Page>
  )
}

export default ReduxComponent
