import React, { useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux'

import { register } from '../../Redux/LoginUserData/Action';

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState();
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")

  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate)


  const handleRegister = () => {
    const data = {
      name: name,
      email: userEmail,
      mobile: mobile,
      password: userPassword,
    }
    console.log("dataaa", data);
    dispatch(register(data))
  }

  if (isAuth === true) {
    return navigate("/");
  }

  return (
    <div>

      <h1>Register</h1>

      <div id="registerBox">
        <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '45ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div id="loginHead" className='FontStyleNav'> E-commerce </div>

          <TextField label="Enter Name" variant="filled" color="success" focused onChange={(e) => setName(e.target.value)} /><br /><br />

          <TextField label="Enter Email" variant="filled" color="success" focused onChange={(e) => setUserEmail(e.target.value)} /><br /><br />

          <TextField label="Enter Mobile Number" variant="filled" color="success" focused onChange={(e) => setMobile(e.target.value)} /><br /><br />

          {/* <TextField label="Enter Username" variant="filled" color="success" focused /><br /><br /> */}

          <TextField label="Enter Password" variant="filled" color="success" focused onChange={(e) => setUserPassword(e.target.value)} /> <br /><br />

          {/* <Button variant="contained">Login</Button><br /> */}

          <span><Button className='ButtonDiv' variant="contained" onClick={() => handleRegister()} >Register</Button></span>
          <span><Button className='ButtonDiv' variant="contained" onClick={() => { navigate("/login") }}>Login</Button></span><br />

          <Button id='google' className='ButtonDiv' variant="contained" onClick={() =>
            window.open("https://gold-cygnet-kilt.cyclic.app/auth/google", "_self")
            // src("http://localhost:2345/auth/google")
          }>Sign in with Google</Button>
        </Box>
        </div>
        
      </div>

    </div>
  )
}
