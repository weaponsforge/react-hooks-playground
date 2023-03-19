// Notes:
// https://redux.js.org/tutorials/essentials/part-6-performance-normalization#normalized-state-structure
// https://redux.js.org/tutorials/essentials/part-6-performance-normalization#optimizing-the-posts-list

import {
  createSlice,
  createEntityAdapter
} from '@reduxjs/toolkit'

import { STATES } from '@/lib/store/constants'

// Entiti adapter
const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id
})

// Slice
const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({
    loading: STATES.IDLE,
    error: '',
    success: '',
    todo: null
  }),
  reducers: {
    userReceived (state, action) {
      const id = Math.random().toString(36).substring(2, 8)

      state.loading = STATES.IDLE
      state.todo = { ...action.payload, id }
      usersAdapter.addOne(state, state.todo)

    },
    userDelete (state, action) {
      usersAdapter.removeOne(state, action.payload)
    },
    usersReceived (state, action) {
      state.loading = STATES.IDLE
      usersAdapter.setAll(state, action.payload)
    }
  }
})

export const {
  userReceived,
  usersReceived,
  userDelete
} = usersSlice.actions

export default usersSlice.reducer
