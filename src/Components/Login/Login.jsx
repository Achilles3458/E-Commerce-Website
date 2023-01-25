import React, { useState } from 'react'
import "./Login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/LoginUserData/Action';

// import { login } from '../../../../../eco-mern website/client/src/Redux/LoginUserData/Action';

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [useeremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate)
  console.log("home nav ", isAuth)

  const handleAdd = () => {
    const data = {
      "email": useeremail,
      "password": password
    }
    console.log("heloo", data)
    dispatch(login(data));
  }

  if (isAuth === true) {
    return navigate("/");
  }

  return (
    <div>
      <h1>Login</h1>

      <div id="loginBox">
        <div>
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
          <TextField label="Email" variant="filled" color="success" focused onChange={(e) => setUseremail(e.target.value)} /><br /><br />

          <TextField label="Password" variant="filled" color="success" focused onChange={(e) => setPassword(e.target.value)} /> <br /><br />

          <span><Button className='ButtonDiv' variant="contained" onClick={() => handleAdd()} >Login</Button></span>
          <span><Button  className='ButtonDiv' variant="contained" onClick={() => { navigate("/register") }} >Register</Button></span><br />

          

          <Button id='google' className='ButtonDiv' variant="contained" onClick={() =>
            window.open("https://gold-cygnet-kilt.cyclic.app/auth/google", "_self")
            // src("http://localhost:2345/auth/google")
          }>Sign in with Google</Button>

        </Box>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
