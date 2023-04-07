import { useState } from 'react'
import TodoListMemo from '../todolistmemo'

// Optimize rerenders by wrapping TodoListMemo in a memo() function
// Even it the containing parent's local states changes
function CounterListMemo () {
  const [count, setCount] = useState(0)
  console.log('counter render')

  return (
    <div>
      <h3>CounterListMemo</h3>
      <p>Features a Todo list using useReducer and a counter increment button/display. The Todo List component is a child of the Counter component. The TodoList component is wrapped by React.memo().</p>

      <h3>Count</h3>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev += 1)}>
        Increment
      </button>

      <TodoListMemo />
    </div>
  )
}

export default CounterListMemo
