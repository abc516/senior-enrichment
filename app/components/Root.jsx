import React from 'react';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'

import { Provider } from 'react-redux'
import store from '../store'

import Home from './Home'
import Students from './Students'
import AddStudent from './AddStudent'
import SingleCampus from './SingleCampus'
import App from './App'

export default function Root () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <Route path="/campuses" component={Home} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route path="/students" component={Students} />
            <Route path="/addStudent" component={AddStudent} />
            <IndexRedirect to="/campuses" />
          </Route>
        </Router>
      </Provider>
    )
}
