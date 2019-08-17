import React, { useState } from 'react';
import FileUpload from './FileUpload';

const Form = (props) => {
  const [state, setState] = useState({
    name: '',
    education: '',
    file: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await props.setUserDetails(state);
    await props.history.push('registration');
  };

  const handleChangeName = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };


  const editHandler = (file) => {
    console.log(file);
    setState({
      ...state,
      file,
    });
  }

  return (
    <form>
      
    <label>
      Name:
      <input 
        type="text" 
        required
        name="name"
        value={state.name} 
        onChange={handleChangeName}
        placeholder={"Name"}
      />
    </label>
    <label>
      Education:
      <input
        type="text"
        name="education"
        required 
        value={state.education} 
        onChange={handleChangeName}
        placeholder={"Education"}
      />
    </label>
    <FileUpload 
      disabled={!state.name || !state.education || !state.file}
      editHandler={editHandler}
      registerHandler={handleSubmit}
     />
  </form>
  
  )
}

export default Form;