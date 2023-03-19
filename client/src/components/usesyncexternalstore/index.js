import Page from '@/common/layout/page'
import useTodos from '@/domain/usesyncexternalstore/todostore'

function UseSyncExternalStoreComponent () {
  const { todos, add } = useTodos()

  return (
    <Page>
      <h2>
        UseSyncExternalStoreComponent
      </h2>

      {(todos !== undefined) &&
      <div>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
      }

      <button onClick={() => add()}>Add Todo</button>
    </Page>
  )
}

export default UseSyncExternalStoreComponent
