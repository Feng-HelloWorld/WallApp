import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import "./Register.css"

export const Register = (props) => {
    return(
        <div className='registerPage'>
            <div className='registerBody'>
                <h1 className='registerTitle'>Sign Up</h1>

                <label className='registerNormalText'>User Name</label>
                <input name='userName' placeholder='name' className='registerInput'/>

                <label className='registerNormalText'>Email Address</label>
                <input name='email' placeholder='email' className='registerInput'/>

                <label className='registerNormalText'>Password</label>
                <input name='userName' type='password' placeholder='password' className='registerInput'/>


                <label className='registerNormalText'>Confirm Password</label>
                <input name='confirmPassword' placeholder='confirm password' className='registerInput'/>

                <button className='registerSubmit'>Sign Up</button>
                
                <Link to='/login' className='registerLoginLink'>Already have an account?</Link>
            </div>
        </div>
    )
}

export default Register