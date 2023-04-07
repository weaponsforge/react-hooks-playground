import PropTypes from 'prop-types'
import Page from '@/common/layout/page'
import Card from '@/common/ui/card'
import TodoListComponentV2 from '../components/todolistv2'

function SyncExternalStoreComponent ({
  addTodo,
  deleteTodo
}) {
  return (
    <Page>
      <h2>
        useSyncExternalStore
      </h2>

      <p>
        Testing page re-renders and data rendering from a global variable set by useSyncExternalStore inside a deeply-nested component.
      </p>
      <br /><br />

      <button onClick={() => addTodo()}>
        Add Todo
      </button>

      <br /><br />

      <Card>
        <Card>
          <Card>
            <Card>
              <Card>
                <Card>
                  <TodoListComponentV2
                    deleteTodo={deleteTodo}
                  />
                </Card>
              </Card>
            </Card>
          </Card>
        </Card>
      </Card>

      <br />

      <Card>
        Hello
      </Card>
    </Page>
  )
}

SyncExternalStoreComponent.propTypes = {
  addTodo: PropTypes.func,
  deleteTodo: PropTypes.func
}

export default SyncExternalStoreComponent
