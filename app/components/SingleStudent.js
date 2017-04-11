import React from 'react'

export default function SingleStudent(props) {

  const student = props.student
  //const schoolArr = props.school
  const school = props.school
  console.log('student', student)
  console.log('school', school)
  return (
    <div>
      {
        student && school &&
        <ul className='list-group'>
          <li className ='list-group-item'>{student.name}</li>
          <li className ='list-group-item'>{student.email}</li>
          <li className ='list-group-item'>{school.name}</li>
        </ul>
      }
    </div>
  )
}
