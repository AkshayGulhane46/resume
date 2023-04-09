import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function EducationSection({
  institute,
  passyear,
  CGPA,
  Course
}) {
  return (
    <>
        <h2>{Course}</h2>
        <h1>{institute}</h1>
        <p>{passyear}</p>
        <p>{CGPA}</p>
       
    </>
  );
}

export default EducationSection;