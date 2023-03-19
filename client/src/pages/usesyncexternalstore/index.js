import UseSyncExternalStoreComponent from '@/components/usesyncexternalstore'
import useTodos from '@/lib/hooks/usetodo'

function UseSyncExternalStore () {
  const { addTodo, deleteTodo } = useTodos()

  return (
    <UseSyncExternalStoreComponent
      addTodo={addTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default UseSyncExternalStore
