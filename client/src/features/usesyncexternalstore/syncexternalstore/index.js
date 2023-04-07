import SyncExternalStoreComponent from './syncexternalstore'
import useTodos from '@/lib/hooks/usetodo'

function SyncExternalStore () {
  const { addTodo, deleteTodo } = useTodos()

  return (
    <SyncExternalStoreComponent
      addTodo={addTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default SyncExternalStore
