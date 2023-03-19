import { useSyncExternalStore } from 'react'

// https://react.dev/reference/react/useSyncExternalStore

// Global item id
let nextId = 0

// Global store containing an array of objects
let todos = [{ id: nextId++, text: 'Todo #1' }]

// Internal listeners for each method in todoStore initialized by useSyncExternalStore.
// Needs to call emitChange() to take effect
let listeners = []

/**
 * Exportable hook that uses useSyncExternalStore and a global variable to store data.
 * Usage: const { todos, addTodo, deleteTodo } = useTodos()
 * @returns {Object} { todos, addTodo, deleteTodo }
 */
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

/**
 * The external store with available useSyncExternalStore-required methods:
 * subscribe() - Used and initialized internally by useSyncExternalStore
 * getSnapshot() - Returns the current (full) snapshot of the global data variable
 * getServerSnapshot() - Used in SSR
 */
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
