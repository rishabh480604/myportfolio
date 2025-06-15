import React, { useEffect, useState } from 'react'
import './Contact.css'

import {Button, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { contactUs } from '../../actions/user';
function Contact() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const dispatch=useDispatch();
  const {loading,message:alertMessage,error}=useSelector((state)=>state.update);

  const contactFormHandler=(e)=>{
    e.preventDefault();
    dispatch(contactUs(name,email,message));

  }
  useEffect(()=>{
    if(error){
      console.log(error);
      dispatch({type:"CLEAR_ERROR"});
    }
    if(alertMessage){
      console.log(alertMessage);
      dispatch({type:"CLEAR_MESSAGE"});
    }
  })

  return (
    <div className='contact'>
      <div className='contactRightBar'>
        
      </div>
      <div className='contactContainer'>
        <form className='contactContainerForm' onSubmit={contactFormHandler}> 
          <Typography variant='h4'>Contact Us</Typography>
            <input type="text" required placeholder='Name' onChange={(e)=>setName(e.target.value)} className='bg-indigo-100 border text-indigo-600'/>
            <input type="email" required placeholder='email' onChange={(e)=>setEmail(e.target.value)} className='bg-indigo-100 text-indigo-600'/>

            <textarea rows="10" cols="30" required placeholder='Message' onChange={(e)=>setMessage(e.target.value)} className='bg-indigo-100 text-indigo-600'></textarea>
            <Button variant='contained' type='submit' disabled={loading}>send</Button>
          
        </form>
        
      </div>

      
    </div>
  )
}

export default Contact
