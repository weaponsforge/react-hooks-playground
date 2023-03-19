import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import todoSlice from '@/lib/store/todos/todoSlice'

// Reducers
const combinedReducer = combineReducers({
  todos: todoSlice
})

const rootReducer = (state, action) => {
  return combinedReducer(state, action)
}

// Global store
export const store = configureStore({
  reducer: rootReducer
})
