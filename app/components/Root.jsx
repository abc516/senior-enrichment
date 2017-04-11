import React from 'react';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from '../store'

import CampusesContainer from '../containers/CampusesContainer'
import StudentsContainer from '../containers/StudentsContainer'
import AddStudent from './AddStudent'
import SingleCampusContainer from '../containers/SingleCampusContainer'
import SingleStudentContainer from '../containers/SingleStudentContainer'
import App from './App'
import {receiveStudents, receiveCampuses, getCampusById, getStudentById} from '../action-creators'
const onAppEnter = () => {

  const pCampuses = axios.get('/api/campuses');
  const pStudents = axios.get('/api/students');

  return Promise
    .all([pCampuses, pStudents])
    .then(responses => responses.map(res => res.data))
    .then(([campuses, students]) => {
      store.dispatch(receiveCampuses(campuses));
      store.dispatch(receiveStudents(students));
    });
};

const onCampusEnter = (nextRouterState) => {
  const campusId = nextRouterState.params.campusId
  store.dispatch(getCampusById(campusId))
}

const onStudentEnter = (nextRouterState) => {
  const studentId = nextRouterState.params.studentId
  store.dispatch(getStudentById(studentId))
}

export default function Root () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App} onEnter={onAppEnter}>
            <Route path="/campuses" component={CampusesContainer} />
            <Route
              path="/campuses/:campusId"
              component={SingleCampusContainer}
              onEnter={onCampusEnter} />
            <Route path="/students" component={StudentsContainer} />
            <Route
              path="/students/:studentId"
              component={SingleStudentContainer}
              onEnter={onStudentEnter} />
            <Route path="/addStudent" component={AddStudent} />
            <IndexRedirect to="/campuses" />
          </Route>
        </Router>
      </Provider>
    )
}
