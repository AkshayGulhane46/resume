import React from 'react';
import './WorkExperiencesection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function WorkExperiencesection({
  companyname,
  description,
  years,
  designation
}) {
  return (
    <>
      <div className='experience'>
        <div className='companyname'><h1>{companyname}</h1></div>
        <div className='designation'><h3>{designation}</h3></div>
        <div className='year'><h1>{years}</h1></div>
        <div className='description'><p>{description}</p></div>
      </div>
    </>
  );
}

export default WorkExperiencesection;