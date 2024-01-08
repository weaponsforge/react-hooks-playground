import { useEffect, useState } from 'react'

import characters from '@/data/characters.json'
import styles from '../../tablesdemo/TablesDemo.module.css'

function FullTable () {
  const [data, setData] = useState(characters)
  const [headers, setHeaders] = useState([])

  useEffect(() => {
    if (headers.length === 0) {
      setHeaders(Object.keys(data[0]).map((key, id) => ({
        id,
        name: key
      })))
    }
  }, [headers, data])

  const handleCellUpdate = (rowId, field, newValue) => {
    if (data[rowId][field] === parseFloat(newValue)) return

    setData(prev => 
      prev.map(row => 
        row.id === rowId ? { ...row, [field]: parseFloat(newValue) } : row
      )
    )
  }

  const handleKeyDown = (e, rowIndex, colIndex) => {
    // Move cursor to next row
    const { keyCode } = e
    if (keyCode !== 13) return

    const nextIndex = (rowIndex === data.length - 1)
      ? 0 : rowIndex + 1
    
    const nextId = `cell-${nextIndex}-${colIndex}`
    const next = document.getElementById(nextId)
    next?.focus()
  }

  return (
    <div className={styles.container}>
      <div className={styles.subDescription}>
        <h3>Full Table re-rendering</h3>
        <ul>
          <li>On edit, this table renders the object array data using map(), rendering the full table.</li>
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
            {data.map((player, rowIndex) => (
              <tr key={player.id}>
                {headers?.map((field, colIndex) => (
                  <td key={field.id}>
                    {(['id', 'name'].includes(field))
                      ? player[field]
                      : <input
                        id={`cell-${rowIndex}-${colIndex}`} 
                        type="text"
                        defaultValue={player[field.name]}
                        onFocus={(e) => e.target.select()}
                        onBlur={(e) => {
                          const { value } = e.target
                          handleCellUpdate(rowIndex, field.name, value)
                        }}
                        onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                      />
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default FullTable
