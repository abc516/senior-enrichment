import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCampus from '../components/AddCampus';
import { addNewCampus } from '../action-creators';
//import { loadAllSongs } from '../action-creators/schools';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit (newCampus) {
      return dispatch(addNewCampus(newCampus));
    }
  };
};

class AddCampusContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: ''
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
    const newCampus = {
      name: this.state.name,
      imageUrl: this.state.imageUrl
    }
    this.props.handleSubmit( newCampus )
  }

  render() {

    const name = this.state.name
    const imageUrl = this.state.imageUrl

    return (
      <AddCampus
        name={name}
        imageUrl={imageUrl}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCampusContainer);
