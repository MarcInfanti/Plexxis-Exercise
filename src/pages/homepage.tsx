import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const HomePage: FC = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="../employees">Employees</Link>
    </div>
  )
}

export default HomePage
