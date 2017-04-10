import React, { PropTypes } from 'react'
import Students from './Students'

export default function SingleCampus(props) {

  const campus = props.campus
  const studentsOnCampus = props.studentsOnCampus

  return (
    <div>
      <h3>Welcome to {campus.name} !</h3>
      <img src={campus.imageUrl} />
      <Students students={studentsOnCampus} />
    </div>
  )
}
