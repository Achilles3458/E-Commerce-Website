import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT"
 
export const loginLoading = () => ({
    type : LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type : LOGIN_SUCCESS,
    payload
});

export const loginFailure =() => ({
    type: LOGIN_FAILURE
})

export const logout = () => ({
  type : LOGOUT
})



export const login = (data) => (dispatch)=> {

    dispatch(loginLoading())

axios.post("https://gold-cygnet-kilt.cyclic.app/login", data).then((res) => {dispatch(loginSuccess(res.data)) ; alert("Login Success") }).catch((error) => {alert(error.response.data.message); dispatch(loginFailure())})
  
}


export const register = (data) => (dispatch)=> {
    // const dispatch = useDispatch();

    // dispatch(loginLoading())
    // fetch("https://loginregisterbackend.herokuapp.com/register", {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    //   headers:{
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then((res) => res.json())
    // .then((res) => dispatch(loginSuccess({email:res.email,token:res.token})))
    // .then((res) => {alert("Register Successfull")})
    // .catch((err) => dispatch(loginFailure()))

    dispatch(loginLoading())
    axios.post("https://gold-cygnet-kilt.cyclic.app/register", data).then((res) => {dispatch(loginSuccess(res.data)) ;alert("Register Successfully")}).catch((error) => {console.log(error.response.data.message) ; dispatch(loginFailure()) })

}