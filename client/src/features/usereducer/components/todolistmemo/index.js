import { useReducer, memo } from 'react'

import { ACTION_TYPES } from '../todolist/actions'
import reducer from '../todolist/reducer'
import data from '../todolist/todos.json'

const initialState = {
  todos: data
}

// A memo() - wrapped version of Todolist
function TodoListMemo () {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('todolistmemo render')

  const clearItems = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_LIST })
  }

  const resetList = () => {
    dispatch({ type: ACTION_TYPES.RESET_LIST })
  }

  const removeTodo = (id) => {
    dispatch({ type: ACTION_TYPES.DELETE, payload: id })
  }

  return (
    <div>
      <br />
      <h3>Todo List</h3>
      <button onClick={clearItems}>Clear</button> &nbsp;
      <button onClick={resetList}>Reset</button>
      <br /><br /><hr />

      <ul>
        {state.todos.map((item, index) => (
          <li key={index}>
            <span>{item.title}</span> &nbsp;
            <button onClick={() => removeTodo(item.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(TodoListMemo)
