import { useSyncExternalStore } from 'react'

// https://react.dev/reference/react/useSyncExternalStore

let nextId = 0
let todos = [{ id: nextId++, text: 'Todo #1' }]
let listeners = []

export default function useTodos () {
  const todos = useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getSnapshot,
    todoStore.getServerSnapshot
  )

  return {
    todos,
    addTodo: todoStore.addTodo,
    deleteTodo: todoStore.deleteTodo
  }
}

export const todoStore = {
  addTodo () {
    todos = [ ...todos, { id: nextId++, text: 'Todo #' + nextId }]
    emitChange()
  },

  deleteTodo (id) {
    todos = todos.filter(item => item.id !== id)
    emitChange()
  },

  subscribe (listener) {
    listeners = [...listeners, listener]

    return () => {
      listeners = listeners.filter(item => item !== listener)
    }
  },

  getSnapshot () {
    return todos
  },

  getServerSnapshot () {
    return todos
  }
}

function emitChange () {
  for (let listener of listeners) {
    listener()
  }
}
