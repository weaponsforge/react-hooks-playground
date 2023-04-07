import { ACTION_TYPES } from './actions'
import data from './todos.json'

const reducer = (state, action) => {
  if (action.type === ACTION_TYPES.CLEAR_LIST) {
    return { ...state, todos: [] }
  }

  if (action.type === ACTION_TYPES.RESET_LIST) {
    return { ...state, todos: data }
  }

  if (action.type === ACTION_TYPES.DELETE) {
    return { ...state, todos: state.todos.filter(item => item.id !== action.payload) }
  }

  if (action.type === ACTION_TYPES.CREATE) {
    const id = state.todos.length
    const todo = { ...action.payload, id, status: 'pending' }
    return { ...state, todos: [...state.todos, todo] }
  }

  throw new Error(`Invalid action type ${action.type}.`)
}

export default reducer
