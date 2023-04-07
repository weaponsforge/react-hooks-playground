import Counter from '../counter'
import TodoList from '../todolist'

// Optimized rendering by lowering the states
function CounterListOptimized () {
  return (
    <div>
      <h3>CounterListOptimized</h3>
      <p>Features a Todo list using useReducer and a counter increment button/display. The Todo List component and Counter component are children of a parent component.</p>

      <Counter />
      <TodoList />
    </div>
  )
}

export default CounterListOptimized
