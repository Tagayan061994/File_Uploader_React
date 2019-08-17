import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';
import {withRouter, Route, Switch} from 'react-router-dom';
import RegisterPage from './components/RegisterPage'; 


const App = (props) => {
  const [state, setState] = useState({
    name: '',
    education: '',
    file: null
  });

  const setUserDetails = ({name, education, file}) => {
    setState({
      ...state,
      name,
      education,
      file,
    })
  }

  return (
  
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> XnTrends File Upload Task
    </h4>
    <Switch>
      <Route exact path='/' render={(props) => <Form {...props} setUserDetails={setUserDetails} />}/>
      <Route exact path='/registration' render={(props) => <RegisterPage userDetails={state} {...props} />} />
    </Switch>
  </div>
);
}

export default withRouter(App)
