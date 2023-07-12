import React, { useState } from 'react';
import '../Styles/signup.css';
import { Link } from 'react-router-dom';

const SignUp = ({ onLogin }) => {
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };


  return (
    <section id='body'>
      <section className="container">
        <header>SignUp Form</header>
        <div className='image'>
          <img src={file} style={{ marginTop: '20px' }} />
          <input type='file' onChange={handleChange} style={{ marginRight: '200px' }} />
        </div>
        <form action="#" className="form">
          <div className="input-box">
            <label>First Name</label>
            <input type="text" placeholder="Enter full name" required />
          </div>

          <div className="input-box">
            <label>Last Name</label>
            <input type="text" placeholder="Enter full name" required />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" required />
          </div>

          <Link to='/pdetails'>
            <button className='submit'> Send OTP</button>
          </Link>
        </form>
      </section>
    </section>
  )
};

export default SignUp;