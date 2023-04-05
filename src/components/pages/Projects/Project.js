import React from 'react';
import ProjectSection from '../../projectSection';
import { ProjectOne , ProjectTwo} from './Data';
import './Projects.css';


function Project() {
  return (
    <>
    <div className='projects-grid'>
      <div className='project'><ProjectSection{...ProjectOne}/></div>
      <div className='project'><ProjectSection{...ProjectOne}/></div>
      <div className='project'><ProjectSection{...ProjectOne}/></div>
      <div className='project'><ProjectSection{...ProjectOne}/></div>

    </div>
    </>
  );
}

export default Project;