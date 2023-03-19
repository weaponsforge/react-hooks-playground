import { useDispatch } from 'react-redux'
import { userReceived, userDelete } from '@/lib/store/users/usersSlice'

import UsersComponent from '@/components/users'

function Users () {
  const dispatch = useDispatch()

  const addUser = () => {
    dispatch(userReceived({
      text: 'User anonymous!'
    }))
  }

  const deleteUser = (id) => {
    dispatch(userDelete(id))
  }

  return (
    <UsersComponent
      addUser={addUser}
      deleteUser={deleteUser}
    />
  )
}

export default Users
