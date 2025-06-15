import React, { useEffect, useState } from 'react'
import './Login.css'
import { Typography } from '@mui/material'
import {Button} from '@mui/material'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/user'
import { useSelector } from 'react-redux'

const Login = () => {


    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(login(email,password));
    }
    const {loading,error,message}=useSelector((state)=> state.login)
    useEffect(()=>{
        if(error){
            alert(error);
            
        }
        if(message){
            alert(message);
            dispatch({
                type:"CLEAR_MESSAGE"
            });
        }
    },[alert,error,message]);

  return (
    <div className='login'>
        
        { <div className='loginContainer'>
            <form className='loginForm' onSubmit={submitHandler}>
                <Typography variant='h4'>
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{ marginRight:'1vnax' }}>N</p>
                    <p> </p>
                    <p> </p>
                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                </Typography>

                <div>
                    <input required type="email" placeholder='Admin Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <input required type="password" placeholder='Admin Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <Button type='submit' variant='contained' disabled={loading}>Login</Button>
                </div>
                
            </form>
            
        </div> }
      
    </div>
  )
}

export default Login
