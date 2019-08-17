import React from 'react';

const RegisterPage = (props) => {

  return (
    <div> 
      <div className='row mt-5'>
        <div className='col-md-6 m-auto'>
          <img 
            style={{ 
            width: '50%', 
            borderRadius: "50%", 
            display: 'block', 
            margin: "0 auto" }}
            src={props.userDetails.file.filePath} alt='' />
        </div>
        <div style={{ width: '15%' }}>
            {props.userDetails.name}
        </div>
     
        <div style={{ width: '15%' }}>
          {props.userDetails.education}
        </div>
      </div>        
    </div>
  )
};


export default RegisterPage;