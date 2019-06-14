import React, { Component } from 'react'
import PropTypes from 'prop-types'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Things To Do</th>
      </tr>
    </thead>
  )
}

// const TableBody = props => {
//   // const rows = props.
//
//   return <tbody>{rows}</tbody>
// }

class Table extends Component {
  render() {
    const { taskData, removeTask } = this.props

    return (
      <table>
        <TableHeader />
        <tbody>
          {taskData.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row}</td>
                <td>
                  <button onClick={() => removeTask(index)}>
                    Delete Chore
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  removeTask: PropTypes.func.isRequired,
  taskData: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Table
