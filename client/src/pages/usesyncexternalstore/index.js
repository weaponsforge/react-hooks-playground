import UseSyncExternalStoreComponent from '@/components/usesyncexternalstore'
import useTodos from '@/domain/usesyncexternalstore/todostore'

function UseSyncExternalStore () {
  const { todos, addTodo, deleteTodo } = useTodos()

  return (
    <UseSyncExternalStoreComponent
      todos={todos}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default UseSyncExternalStore
