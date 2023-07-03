import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const PageNotFound: FC = () => {
  return (
    <div>
      <h1>Oops! We couldn't find the page you were looking for.</h1>
      <Link to="/">Back to homepage</Link>
    </div>
  )
}

export default PageNotFound
