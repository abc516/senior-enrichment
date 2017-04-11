import React from 'react'

function AddCampus (props) {

  const name = props.name
  const imageUrl = props.imageUrl
  const handleSubmit = props.handleSubmit
  const handleChange = props.handleChange

  return (
    <div>
      <h1> Add a Campus </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Campus Name</label>
          <input name="name" className="form-control" value={name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Campus Picture</label>
          <input name="imageUrl" className="form-control" value={imageUrl} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  )
}

export default AddCampus;
