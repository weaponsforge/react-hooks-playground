import { memo } from 'react'
import PropTypes from 'prop-types'

/**
 * Notes:
 * 
 * This table row component re-renders only if its props changes.
 * props.onEdit, an anonymous function, while looking constant also re-renders 
 * so be sure to wrap it in a useCallback hook in it's parent component.
 * 
 * Try:
 * Observe this component's re-renders on the React Profile with and without the memo() hook.
 */
function TableRow ({
  nextIndex,
  rowIndex,
  headers,
  player,
  onEdit,
  key,
  idPrefix = 'm'
}) {
  console.log(`--Re-rendering for update: ${player.name}`)

  const handlePlayerEdit = (e, rowIndex, field) => {
    const { value } = e.target
    if (player[field] === parseFloat(value)) return

    onEdit(rowIndex, field, value)
  }

  const handleKeyDown = (e, fieldIndex) => {
    // Move cursor to next row
    const { keyCode } = e
    if (keyCode !== 13) return

    const nextId = `${idPrefix}-cell-${nextIndex}-${fieldIndex}`
    const next = document.getElementById(nextId)
    next?.focus()
  }

  return (
    <tr key={key}>
      {headers?.map((field, fieldIndex) => (
        <td key={player.id}>
          {(['id', 'name'].includes(field.name))
            ? player[field.name]
            : <input
              id={`${idPrefix}-cell-${rowIndex}-${fieldIndex}`} 
              type='text'
              defaultValue={player[field.name]}
              onBlur={(e) => handlePlayerEdit(e, rowIndex, field.name)}
              onFocus={(e) => e.target.select()}
              onKeyDown={(e) => handleKeyDown(e, fieldIndex)}
            />
          }
        </td>
      ))}
    </tr>
  )
}

TableRow.propTypes = {
  nextIndex: PropTypes.number,
  rowIndex: PropTypes.number,
  headers: PropTypes.object,
  player: PropTypes.arrayOf(PropTypes.object),
  onEdit: PropTypes.func,
  key: PropTypes.number,
  idPrefix: PropTypes.string
}

export default memo(TableRow)
