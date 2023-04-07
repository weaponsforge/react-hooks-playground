import { useState } from 'react'

function Counter () {
  const [count, setCount] = useState(0)
  console.log('counter render')

  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev += 1)}>
        Increment
      </button>
    </div>
  )
}

export default Counter
