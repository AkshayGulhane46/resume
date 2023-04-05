import React from 'react';
import ProjectSection from '../../projectSection';
import { ProjectOne , ProjectTwo , ProjectThree,ProjectFour ,ProjectFive , ProjectSix , ProjectSeven , ProjectEight} from './Data';
import './Projects.css';


function Project() {
  return (
    <>
    <div className='projects-grid'>
      <div className='project'><ProjectSection{...ProjectOne}/></div>
      <div className='project'><ProjectSection{...ProjectTwo}/></div>
      <div className='project'><ProjectSection{...ProjectThree}/></div>
      <div className='project'><ProjectSection{...ProjectFour}/></div>
      <div className='project'><ProjectSection{...ProjectFive}/></div>
      <div className='project'><ProjectSection{...ProjectSix}/></div>
      <div className='project'><ProjectSection{...ProjectSeven}/></div>
      <div className='project'><ProjectSection{...ProjectEight}/></div>
    </div>
    </>
  );
}

export default Project;