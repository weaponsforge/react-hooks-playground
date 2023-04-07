import { useState } from 'react'
import TodoList from '../todolist'

// Shows unoptimized rerenders from TodoList
function CounterList () {
  const [count, setCount] = useState(0)
  console.log('counter render')

  return (
    <div>
      <h3>CounterList</h3>
      <p>Features a Todo list using useReducer and a counter increment button/display. The Todo List component is a child of the Counter component.</p>

      <h3>Count</h3>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev += 1)}>
        Increment
      </button>

      <TodoList />
    </div>
  )
}

export default CounterList
