import { useEffect, useState } from 'react'

import TableRow from '../tablerow'

import characters from '@/data/characters.json'
import styles from '../../tablesdemo/TablesDemo.module.css'

const UnoptimizedTable = () => {
  const [players, setData] = useState(characters)
  const [headers, setHeaders] = useState([])

  useEffect(() => {
    if (headers.length === 0) {
      setHeaders(Object.keys(players[0]).map((key, id) => ({
        id,
        name: key
      })))
    }
  }, [headers, players])

  // Wrap anonymous functions in useCallback() to prevent re-renders on child components.
  // Sometimes, local state may need to be included in its dependency array
  const handleCellUpdate = (rowId, field, newValue) => {
    setData((prevData) => {
      const tempData = [...prevData]
      const updatedValue = parseFloat(newValue)

      // Update only the affected field in an object element
      if (tempData[rowId][field] !== updatedValue) {
        tempData[rowId] = {
          ...tempData[rowId], [field]: updatedValue
        }
      }

      return tempData
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.subDescription}>
        <h3 style={{ color: 'red' }}>Table re-rendering all rows (WARNING!) ❌</h3>
        <ul>
          <li>This table renders the object array data using map().</li>
          <li>It&lsquo;s using a memoized TableRow component but</li>
          <li>it&apos;s handleCellUpdate() method, an anonymous function is not memoized using useCallback().</li>
          <li>On edit, it renders all table rows.</li>
        </ul>
      </div>

      <form autoComplete='off'>
        <table>
          <thead>
            <tr>
              {headers?.map(column => (
                <th key={column.id}>
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players?.map((player, rowIndex) => (
              <TableRow
                key={player.id}
                rowIndex={rowIndex}
                nextIndex={(rowIndex === players.length - 1)
                  ? 0 : rowIndex + 1
                }
                headers={headers}
                player={player}
                onEdit={handleCellUpdate}
                idPrefix='u'
              />
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default UnoptimizedTable
