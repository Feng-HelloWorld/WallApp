import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import "./Login.css"

export const Login = (props) => {
    return(
        <div className='loginPage'>
            <div className='loginBody'>
                <h1 className='loginTitle'>Sign In</h1>

                <label className='loginNormalText'>User Name</label>
                <input name='userName' placeholder='name' className='loginInput'/>

                <label className='loginNormalText'>Password</label>
                <input name='userName' type='password' placeholder='password' className='loginInput'/>

                <button className='loginSubmit'>Sign In</button>
                
                <Link to='/register' className='loginRegisterLink'>Do not have an account?</Link>
            </div>
        </div>
    )
}

export default Login