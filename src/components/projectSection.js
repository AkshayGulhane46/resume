import React from 'react';
import './projectSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { GoMarkGithub } from "react-icons/go";
import { BsYoutube } from "react-icons/bs";


function ProjectSection(
  {
  name,
  description,
  GithubLink,
  YoutubeLink,
  img,
})
  
{
  return (
      <div className='single-projects-grid'>
        <div className='container'>
            <div className='screenshot'><img src={img} alt='Image'/></div>

            <div className='project-details'>
                  <div className='text'>
                    <p className='project-name'> {name} </p>
                    <p className='project-description'> {description} </p>
                  </div>
                  <div className='links'>
                  <a href={GithubLink} target="_blank" rel="noopener noreferrer" className='icon-GitHub' >
                      <GoMarkGithub/>
                    </a> 
                    <a href={YoutubeLink} target="_blank" rel="noopener noreferrer" className='icon-Youtube' >
                      <BsYoutube/>
                    </a>
                  </div>
            </div>
          </div>
      </div>
    );
}

export default ProjectSection;