import React, { useState } from 'react'
import logo from './../assets/logo/logo.png'
import  student  from './../utils/students';

import './../styles/LoginForm.scss';

import { BiBookOpen, BiError } from 'react-icons/bi';

const Login = ({ onLogin }) => {

    const [regNum , SetRegNum] = useState(``);
    const [password , setPassword] = useState(``);
    const [err, setErr] = useState(``);

    const regNum2 = regNum.toLowerCase();

    const handleSubmit = (e) => {
        e.preventDefault()
        setErr(``);

        const found = student.find(s => s.regNo === regNum2);

       if (!found) {
            setErr(`You're not a registered student.`);
            return () => setTimeout(() => setErr(``), 2000);
       }
       if (found.password !== password) {
            setErr(`Invaid password`);
            return;
       }

       onLogin(found);
    }

  return (
    <div className='login-form'>
      <div className="form-m">
        <div className="logo">
          <figure>
          <img src={logo} alt="School Library logo" />
        </figure>
        </div>
        <h2>School Library System</h2>

        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Registration number</label>
            <input type="text" id='text' onChange={e => SetRegNum(e.target.value)} placeholder='Username' required/>

            <label htmlFor="pass">Password</label>
            <input type="password" onChange={e => setPassword(e.target.value)} name="pass" placeholder='* * * * * * * *' id="pass" />

            {err && <div className="err"><BiError/>{`${err}`}</div>}

            <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login