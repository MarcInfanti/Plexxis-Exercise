import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const EmployeeInfo: FC = () => {
  return (
    <div>
      <h1>Employee Info</h1>
      <Link to="..">Employees</Link>
    </div>
  )
}

export default EmployeeInfo
