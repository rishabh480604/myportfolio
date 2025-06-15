import React from 'react'
import './Projects.css'
import { Button, Typography } from '@mui/material'
import { AiOutlineProject } from 'react-icons/ai'
import { Delete } from '@mui/icons-material'
import projectImg from './../../../public/project.webp'

import { FaRegSmileWink } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteProject, getUser } from '../../actions/user'
// const projects=[1,2,3,4]
export const ProjectCard=({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin=false,
  id,
})=>{
  const dispatch=useDispatch();

  const deleteHandler=()=>{
    dispatch(deleteProject(id));
    dispatch(getUser());
  }
  return (
    <>
      <a href={url} className='projectCard'>
        <div>
          <img src={projectImage} alt="Project"/>
          <Typography variant='h5'>{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant='h4'>About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant='h6'>Tech Stack : {technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button 
          style={{color:"rgba(40,40,40,0.7"}}
          onClick={()=> deleteHandler(id)}
        >
          <Delete/>
        </Button>
      )}
    </>
  )
}

function Projects({projects}) {
  return (
    <div className='projects'>
      
      <Typography variant='h3'>
        Projects <AiOutlineProject/>
      </Typography>
    
    <div className='projectWrapper'>

        {projects.map((project,index)=>(
          <ProjectCard url={project.url}
          projectImage={project.image.url}
          projectTitle={project.title}
          description={project.description}
          technologies={project.techStack}/>
         ))} 
    </div>
    <Typography variant='h3' style={{font: "100 1.2 rem 'Ubantu Monon'"}}>
      All the Projects shown are Made by Me <FaRegSmileWink/>
    </Typography>
    </div>
  )
}

export default Projects
