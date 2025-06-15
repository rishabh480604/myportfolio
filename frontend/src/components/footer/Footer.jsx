import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div>
          <Typography variant='h5'>About Me</Typography>
          <Typography>
            Hey , my name is Rishabh. I am a <b>generative human intelligence</b>
          </Typography>
          <Link to="/contact" className='footerContactBtn'>
            <Typography>Contact Us</Typography>
          </Link>
        </div>
        <div>
            <Typography variant='h5'>Social Media</Typography>
            <a href="https://github.com/rishabh480604" target='blank'>
                <BsGithub/>
            </a>

            <a href="https://www.linkedin.com/in/rishabh480604" target='blank'>
                <BsLinkedin/>
            </a>

            



            
        </div>
    </div>
    

  )
}

export default Footer
