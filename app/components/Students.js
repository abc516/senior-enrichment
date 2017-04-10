import React, { PropTypes } from 'react'

function Students (props) {

  const students = props.students

  return (
    <div>
      <h3>List of Students</h3>
      <ul className="list-group">
        {
          students && students.map(student => (
            <li className="list-group-item" key={student.id}>{student.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Students;
