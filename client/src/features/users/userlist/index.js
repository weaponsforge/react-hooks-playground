import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

function UserList ({ deleteUser }) {
  const {ids, entities: users } = useSelector(state => state.users)

  return (
    <ul style={{ marginTop: '24px' }}>
      {(ids).map(((id, index) => (
        <li key={index}>
          <span>id: {users[id].id}, {users[id].text}</span>
          <span>
            <button onClick={() => deleteUser(id)}>
              [ x ]
            </button>
          </span>
        </li>
      )))}
    </ul>
  )
}

UserList.propTypes = {
  deleteUser: PropTypes.func
}

export default UserList
