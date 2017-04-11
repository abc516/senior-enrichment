import React, { PropTypes } from 'react'
import {Link} from 'react-router'

function Students (props) {

  const students = props.students

  return (
    <div>
      <h3>List of Students</h3>
      <ul className="list-group">
        {
          students && students.map(student => (
            <li className="list-group-item" key={student.id}>
              <Link to={`/students/${student.id}`}>{student.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Students;
