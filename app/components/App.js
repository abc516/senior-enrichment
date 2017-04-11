import React, { PropTypes } from 'react'
import {Link} from 'react-router'
const App = ({children}) => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to={'/'}>
              <span>Home</span>
            </Link>
            <Link className="navbar-brand" to={'/students'}>
              <span>Students</span>
            </Link>
            <Link className="navbar-brand" to={'/AddStudent'}>
              <span>Add a Student</span>
            </Link>
          </div>
        </div>
      </nav>
      <div>
        {children}
      </div>
    </div>
  )
}

export default App
