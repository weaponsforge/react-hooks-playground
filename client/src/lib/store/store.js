import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import todoSlice from '@/lib/store/todos/todoSlice'
import usersSlice from '@/lib/store/users/usersSlice'

// Reducers
const combinedReducer = combineReducers({
  todos: todoSlice,
  users: usersSlice
})

const rootReducer = (state, action) => {
  return combinedReducer(state, action)
}

// Global store
export const store = configureStore({
  reducer: rootReducer
})
