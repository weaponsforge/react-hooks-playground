import PropTypes from 'prop-types'
import Page from '@/common/layout/page'
import Card from '@/common/ui/card'
import TodoListComponentV2 from '@/domain/usesyncexternalstore/todolist'

function UseSyncExternalStoreComponent ({
  addTodo,
  deleteTodo
}) {
  return (
    <Page>
      <h2>
        UseSyncExternalStoreComponent
      </h2>

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

      <button onClick={() => addTodo()}>
        Add Todo
      </button>

      <br /><br />

      <Card>
        Hello
      </Card>
    </Page>
  )
}

UseSyncExternalStoreComponent.propTypes = {
  addTodo: PropTypes.func,
  deleteTodo: PropTypes.func
}

export default UseSyncExternalStoreComponent
