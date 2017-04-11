import React from 'react'

function AddStudent(props) {

    const schools = props.schools
    const schoolId = props.schoolId
    const name = props.name
    const email = props.email
    const handleSubmit = props.handleSubmit
    const handleChange = props.handleChange

    return (
      <div>
        <h1> Add Student </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputName">Name</label>
              <input name="name" className="form-control" value={name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Email</label>
              <input name="email" type="email" className="form-control" value={email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="schoolId">Choose a Campus</label>
              <select
                className="form-control"
                name="schoolId"
                value={schoolId}
                required
                onChange={handleChange}>
                {
                  schools && schools.map(school => (
                    <option key={school.id} value={school.id}>{school.name}</option>
                  ))
                }
            </select>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
    )
}

export default AddStudent;
