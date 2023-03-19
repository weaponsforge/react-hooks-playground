import PropTypes from 'prop-types'
import Page from '@/common/layout/page'
import Card from '@/common/ui/card'
import UserListComponent from '@/domain/users/userlist'

function UsersComponent ({
  addUser,
  deleteUser
}) {
  return (
    <Page>
      <h2>
        Redux Toolkit - Users
      </h2>

      <p> Testing page re-renders and data rendering from a redux store inside a deeply-nested component.</p>

      <button onClick={addUser}
        style={{ marginTop: '24px' }}>
        Add User
      </button>

      <br /><br />

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
    </Page>
  )
}

UsersComponent.propTypes = {
  addUser: PropTypes.func,
  deleteUser: PropTypes.func
}

export default UsersComponent
