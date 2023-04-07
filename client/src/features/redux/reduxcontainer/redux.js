import PropTypes from 'prop-types'
import Page from '@/common/layout/page'
import Card from '@/common/ui/card'
import TodoListComponent from '../todolist'

function ReduxComponent ({
  addTodo,
  deleteTodo
}) {
  return (
    <Page>
      <h2>
        Redux Toolkit
      </h2>

      <p> Testing page re-renders and data rendering from a redux store inside a deeply-nested component.</p>

      <button onClick={addTodo}
        style={{ marginTop: '24px' }}>
        Add Todo
      </button>

      <br /><br />

      {/** A deeply-nested component */}
      <Card>
        <Card>
          <Card>
            <Card>
              <Card>
                <Card>
                  <TodoListComponent deleteTodo={deleteTodo} />
                </Card>
              </Card>
            </Card>
          </Card>
        </Card>
      </Card>

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
