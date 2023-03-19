// Notes:
// https://redux.js.org/tutorials/essentials/part-6-performance-normalization#normalized-state-structure
// https://redux.js.org/tutorials/essentials/part-6-performance-normalization#optimizing-the-posts-list

import {
  createSlice,
  createEntityAdapter
} from '@reduxjs/toolkit'

const STATES = {
  IDLE: 'idle',
  PENDING: 'pending'
}

// Entiti adapter
const todosAdapter = createEntityAdapter({
  selectId: (todo) => todo.id
})

// Slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState({
    loading: STATES.IDLE,
    error: '',
    success: '',
    todo: null
  }),
  reducers: {
    todoReceived (state, action) {
      const id = Math.random().toString(36).substring(2, 8)

      state.loading = STATES.IDLE
      state.todo = { ...action.payload, id }
      todosAdapter.addOne(state, state.todo)

    },
    todoDelete (state, action) {
      todosAdapter.removeOne(state, action.payload)
    },
    todosReceived (state, action) {
      state.loading = STATES.IDLE
      todosAdapter.setAll(state, action.payload)
    }
  }
})

export const {
  todoReceived,
  todosReceived,
  todoDelete
} = todoSlice.actions

export default todoSlice.reducer
