import { useReducer } from 'react'

import ContactForm from '../contactform'

import { ACTION_TYPES } from './actions'
import reducer from './reducer'
import data from './todos.json'

const initialState = {
  todos: data
}

function TodoList () {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('todolist render')

  const clearItems = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_LIST })
  }

  const resetList = () => {
    dispatch({ type: ACTION_TYPES.RESET_LIST })
  }

  const removeTodo = (id) => {
    dispatch({ type: ACTION_TYPES.DELETE, payload: id })
  }

  const createTodo = (e) => {
    e.preventDefault()
    const todo = { title: e.target.title.value }

    dispatch({ type: ACTION_TYPES.CREATE, payload: todo })
  }

  return (
    <div>
      <br />
      <h3>Todo List</h3>
      <button onClick={clearItems}>Clear</button> &nbsp;
      <button onClick={resetList}>Reset</button>
      <br /><br /><hr />

      <ContactForm submitForm={createTodo} />

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

export default TodoList
