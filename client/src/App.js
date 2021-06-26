//dependencies
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Surveys from './components/survey/index.js';
import Surveys2 from './components/survey2/index.js';
import checkbox from './components/checkbox/index.js';
import Login from './components/login/index.js';
import View from './components/view/index.js';
//components
import './App.css'

function App(props) {

  useEffect(() => {
    let login = localStorage.getItem('login');
    let user = JSON.parse(localStorage.getItem('user'));
    if(login){
      props.dispatch({type:'ADD_USER', payload: user})
    }
  }, [])

  return (
    <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/surveys" component={Surveys} />
          <Route exact path="/surveys2" component={Surveys2} />
          <Route exact path="/checkbox" component={checkbox} />
          <Route exact path="/view/:id" component={View} />
          <Route component={Surveys2} />
        </Switch>
    </Router>
  );
}

const mapStateToProps = (state)=>{
  return {user: state.user}
}

export default connect(mapStateToProps)(App);
