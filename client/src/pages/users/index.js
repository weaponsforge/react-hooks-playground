import { useDispatch } from 'react-redux'
import { userReceived, userDelete } from '@/lib/store/users/usersSlice'
import { todoDelete, todoReceived } from '@/lib/store/todos/todoSlice'

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

  const addTodo = () => {
    dispatch(todoReceived({
      text: 'Hello, world!'
    }))
  }

  const deleteTodo = (id) => {
    dispatch(todoDelete(id))
  }

  return (
    <UsersComponent
      addUser={addUser}
      deleteUser={deleteUser}
      deleteTodo={deleteTodo}
      addTodo={addTodo}
    />
  )
}

export default Users
