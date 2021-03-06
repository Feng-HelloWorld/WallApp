import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import './Register.css'

export const Register = (props) => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePw, setRePw] = useState('')

  const changeUserName = (e) => {
    setUsername(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const changeRePw = (e) => {
    setRePw(e.target.value)
  }

  // Control if we display a warning message
  const [warning, setWarning] = useState(false)
  const [warningMsg, setWarningMsg] = useState('')

  const submitButton = (e) => {
    if (username === '') {
      setWarning(true)
      setWarningMsg('User name could not be empty!')
    } else if (email === '') {
      setWarning(true)
      setWarningMsg('Email address could not be empty!')
    } else if (password !== rePw) {
      setWarning(true)
      setWarningMsg('Password not match! Please re-enter password.')
    } else {
      // Get posts form the server
      axios
        .post('users/', {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          setUsername('')
          setEmail('')
          setPassword('')
          setRePw('')
          setWarning(false)

          navigate('/login')
          window.alert(
            'You have sign up successfully. A welcome email has been send to your email address.'
          )
        })
        .catch((error) => {
          setWarning(true)
          const firstError = Object.keys(error.response.data)[0]
          if (firstError === 'username') {
            setWarningMsg('This name has already been taken.')
          } else if (firstError === 'email') {
            setWarningMsg(
              'This email has alredy registed or is not in right format.'
            )
          } else if (firstError === 'password') {
            setWarningMsg('Password could not be empty.')
          }
        })
    }
  }

  return (
    <div className='registerPage'>
      <div className='registerBody'>
        <h1 className='registerTitle'>Sign Up</h1>

        <label className='registerNormalText'>User Name</label>
        <input
          name='username'
          className='registerInput'
          onChange={changeUserName}
        />

        <label className='registerNormalText'>Email Address</label>
        <input name='email' className='registerInput' onChange={changeEmail} />

        <label className='registerNormalText'>Password</label>
        <input
          name='password'
          type='password'
          className='registerInput'
          onChange={changePassword}
        />

        <label className='registerNormalText'>Confirm Password</label>
        <input
          name='confirmPassword'
          type='password'
          className='registerInput'
          onChange={changeRePw}
        />

        <label className='registerWarning' hidden={!warning}>
          {warningMsg}
        </label>

        <button className='registerSubmit' onClick={submitButton}>
          Sign Up
        </button>

        <Link to='/login' className='registerLoginLink'>
          Already have an account?
        </Link>
      </div>
    </div>
  )
}

export default Register
