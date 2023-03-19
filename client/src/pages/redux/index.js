import { useDispatch } from 'react-redux'
import { todoReceived, todoDelete } from '@/lib/store/todos/todoSlice'

import ReduxComponent from '@/components/redux'

function ReduxContainer () {
  const dispatch = useDispatch()

  const addTodo = () => {
    dispatch(todoReceived({
      text: 'Hello, world!'
    }))
  }

  const deleteTodo = (id) => {
    dispatch(todoDelete(id))
  }

  return (
    <ReduxComponent
      addTodo={addTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default ReduxContainer
