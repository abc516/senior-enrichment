import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddStudent from '../components/AddStudent';
import { addNewStudent } from '../action-creators';
//import { loadAllSongs } from '../action-creators/schools';

const mapStateToProps = (state) => {
  return {
    schools: state.campuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit (newStudent) {
      return dispatch(addNewStudent(newStudent));
    }
  };
};

class AddStudentContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      schoolId: 0,
      name: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const target = evt.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    const newStudent = {
      name: this.state.name,
      email: this.state.email,
      campusId: this.state.schoolId
    }
    this.props.handleSubmit( newStudent )
  }

  render() {

    const schools = this.props.schools;
    const schoolId = this.state.schoolId;
    const name = this.state.name
    const email = this.state.email

    return (
      <AddStudent
        schools={schools}
        schoolId={schoolId}
        name={name}
        email={email}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudentContainer);
