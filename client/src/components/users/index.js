import PropTypes from 'prop-types'
import Page from '@/common/layout/page'
import Card from '@/common/ui/card'
import UserListComponent from '@/domain/users/userlist'
import TodoListComponent from '@/domain/redux/todolist'

function UsersComponent ({
  addUser,
  deleteUser,
  deleteTodo,
  addTodo
}) {
  return (
    <Page>
      <h2>
        Redux Toolkit - Users
      </h2>

      <p>Testing page re-renders and data rendering from multiple redux stores (Users and ToDo) inside regular and deeply-nested components.</p>

      <button onClick={addUser}
        style={{ marginTop: '24px' }}>
        Add User
      </button>

      <br /><br />
      <h3>Users</h3>
      <br />

      {/** A deeply-nested component */}
      <Card>
        <Card>
          <Card>
            <Card>
              <Card>
                <Card>
                  <UserListComponent deleteUser={deleteUser} />
                </Card>
              </Card>
            </Card>
          </Card>
        </Card>
      </Card>

      <br />
      <button onClick={addTodo}
        style={{ marginTop: '24px' }}>
        Add Todo
      </button>

      <br /><br />
      <h3>ToDo</h3>

      <TodoListComponent deleteTodo={deleteTodo} />
    </Page>
  )
}

UsersComponent.propTypes = {
  addUser: PropTypes.func,
  deleteUser: PropTypes.func
}

export default UsersComponent
