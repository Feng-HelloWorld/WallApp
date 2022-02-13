import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

import "./Login.css"

export const Login = (props) => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const changeUserName = (e) => {
        setUserName(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    // Control if we display a warning message
    const [warning, setWarning] = useState(false);
    const [warningMsg, setWarningMsg] = useState('');

    const submitButton = (e) => {
        if(userName==='') {
            setWarning(true);
            setWarningMsg('User name could not be empty!');
        }
        else if(password==='') {
            setWarning(true);
            setWarningMsg('Password could not be empty!');
        }
        else {

            axios.post(
                "token/",
                {username:userName, password:password}
            ).then(
                (response) => {
                    console.log(response)
                    const token = response.data['access']
                    localStorage.setItem('token',token)
                    navigate('/')
                }
            ).catch(
                (error) => {
                    setWarning(true);
                    setWarningMsg('User name or password is incorrect. Please try again.');
                }
            )
        }
    }








    return(
        <div className='loginPage'>
            <div className='loginBody'>
                <h1 className='loginTitle'>Sign In</h1>

                <label className='loginNormalText'>User Name</label>
                <input name='userName' placeholder='name' className='loginInput' onChange={changeUserName}/>

                <label className='loginNormalText'>Password</label>
                <input name='userName' type='password' placeholder='password' className='loginInput' onChange={changePassword}/>

                <label className='loginWarning' hidden={!warning}>{warningMsg}</label>

                <button className='loginSubmit' onClick={submitButton}>Sign In</button>
                
                <Link to='/register' className='loginRegisterLink'>Do not have an account?</Link>
            </div>
        </div>
    )
}

export default Login