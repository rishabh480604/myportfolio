import React from 'react'
import "./YoutubeCard.css"
import { Typography,Button } from '@mui/material'
import {FaTrash} from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { deleteYoutube, getUser } from '../../actions/user'
const YoutubeCard = ({
    url='url',
    title='title here',
    image,
    isAdmin=false,
    id
}) => {
  const dispatch=useDispatch();
  const deleteHandler=()=>{async()=>{

  
    await dispatch(deleteYoutube(id));    
    dispatch(getUser());
  }
  } 

  return (
    
    <div className='youtubeCard'>
      {`console.log(${title})`}
        <a href="" target='blank'>
            <img src={image} alt='video' />
            <Typography>{title}</Typography>
        </a>
        {isAdmin && <Button style={{margin:'auto', display:'block', color: 'rgba(40,40,40,0.7)'}} onClick={()=> deleteHandler(id)}>
          <FaTrash/>
          </Button>}

      
    </div>
  )
}

export default YoutubeCard
