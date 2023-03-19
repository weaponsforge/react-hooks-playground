import { useSelector, useDispatch } from 'react-redux'
import { todoReceived, todoDelete } from '@/lib/store/todos/todoSlice'

import ReduxComponent from '@/components/redux'

function ReduxContainer () {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

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
      todos={todos.ids.map(id => todos.entities[id])}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default ReduxContainer
