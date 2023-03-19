import PropTypes from 'prop-types'
import Page from '@/common/layout/page'
import Card from '@/common/ui/card'
import TodoListComponent from '@/domain/redux/todolist'

function ReduxComponent ({
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

      <TodoListComponent deleteTodo={deleteTodo} />
      <br />

      <Card>
        hello
      </Card>
    </Page>
  )
}

ReduxComponent.propTypes = {
  addTodo: PropTypes.func,
  deleteTodo: PropTypes.func
}

export default ReduxComponent
