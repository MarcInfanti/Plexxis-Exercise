import React, { FC } from 'react'
import { Outlet, Link } from 'react-router-dom'

const RootLayout: FC = () => {
  return (
    <nav>
      <h1>Plexxis Demo App</h1>
      <Link to="/home">Home</Link>
      <Outlet />
    </nav>
  )
}

export default RootLayout
