import { useState } from 'react'
import Card from '@/common/ui/card'
import Page from '@/common/layout/page'

import TodoListComponentV3 from '../components/todolistv3'
import TodoListComponentFull from '../components/todolistfull'

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

      <h3>ToDo list state passed from props</h3>
      <br />

      {/** Renders a list of ToDo items passed from props */}
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

      <br /><br />

      <h3>ToDo list state isolated on an inner component</h3>
      <br />

      {/** Renders a list of ToDo items with all local state inside the TodoListComponentFull component */}
      <Card>
        <Card>
          <Card>
            <Card>
              <Card>
                <Card>
                  <TodoListComponentFull />
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
