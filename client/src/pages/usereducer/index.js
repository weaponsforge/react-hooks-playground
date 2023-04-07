import Link from 'next/link'

function ReduxPage () {
  return (
    <div>
      <h2>useReducer</h2>
      <p>Checking out useReducer&apos;s basic useage and several re-render optimization techniques.</p>

      <hr />

      <ul>
        <li>
          <Link href='/usereducer/counterlist'>
            <h4>CounterList</h4>
            <p>Features a Todo list using useReducer and a counter increment button/display. The Todo List component is a child of the Counter component.</p>
          </Link>
        </li>

        <li>
          <Link href='/usereducer/counterlistoptimized'>
            <h4>CounterListOptimized</h4>
            <p>Features a Todo list using useReducer and a counter increment button/display. The Todo List component and Counter component are children of a parent component.</p>
          </Link>
        </li>

        <li>
          <Link href='/usereducer/counterlistmemo'>
            <h4>CounterListMemo</h4>
            <p>Features a Todo list using useReducer and a counter increment button/display. The Todo List component is a child of the Counter component. The TodoList component is wrapped by React.memo().</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ReduxPage
