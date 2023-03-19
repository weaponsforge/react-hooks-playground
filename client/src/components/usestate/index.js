import { useState } from 'react'
import Card from '@/common/ui/card'
import Page from '@/common/layout/page'
import TodoListComponentV3 from '@/domain/usestate/todolist'

function UseStateComponent () {
  const [state, setState] = useState([])

  const addTodo = () => {
    const data = [...state]
    data.push({
      id: Math.random().toString(36).substring(2, 8),
      text: 'Hello, wooorld!!'
    })

    setState(data)
  }

  const deleteTodo = (id) => {
    const temp = state.filter(item => item.id !== id)
    setState(temp)
  }

  return (
    <Page>
      <h2>
        useState
      </h2>

      <p> Testing page re-renders and local state set by useState rendering from inside a deeply-nested component.</p>
      <br />

      <button onClick={addTodo}>
        Create Todo
      </button>
      <br /><br />

      <Card>
        <Card>
          <Card>
            <Card>
              <Card>
                <Card>
                  <TodoListComponentV3
                    todos={state}
                    addTodo={addTodo}
                    deleteTodo={deleteTodo}
                  />
                </Card>
              </Card>
            </Card>
          </Card>
        </Card>
      </Card>
    </Page>
  )
}

export default UseStateComponent
