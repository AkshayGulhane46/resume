import React from 'react';
import EducationSection from '../../EducationSection';
import { SSC,HSC,College } from './Data';
import './Education.css';

function Education() {
  return (
    <>
      <div className='grid-container '>
      <div className='grid-item '> <EducationSection{...College}/></div>
      <div className='grid-item '> <EducationSection{...HSC}/></div>
      <div className='grid-item '> <EducationSection{...SSC}/></div>
         
         
      </div>
    </>
  );
}

export default Education;