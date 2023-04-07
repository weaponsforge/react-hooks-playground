import { useState } from 'react'

function TodoListComponentFull () {
  const [todos, setState] = useState([])

  const addTodo = () => {
    const data = [...todos]
    data.push({
      id: Math.random().toString(36).substring(2, 8),
      text: 'Hi, wooorld!!'
    })

    setState(data)
  }

  const deleteTodo = (id) => {
    const temp = todos.filter(item => item.id !== id)
    setState(temp)
  }

  return (
    <>
      <button onClick={addTodo}>
        Create Todo
      </button>
      <br /><br />

      <ul style={{ marginTop: '24px' }}>
        {(todos).map(((item, index) => (
          <li key={index}>
            <span>id: {item.id}, {item.text}</span>
            <span>
              <button onClick={() => deleteTodo(item.id)}>
                [ x ]
              </button>
            </span>
          </li>
        )))}
      </ul>
    </>
  )
}

export default TodoListComponentFull
