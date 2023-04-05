import React from 'react';
import WorkExperiencesection from '../../WorkExperiencesection';
import { workexpObjTwo, workexpObjOne  } from './Data';



function WorkExperience() {
  return (
    <>
      <WorkExperiencesection {...workexpObjTwo}/>
      <WorkExperiencesection {...workexpObjOne}/>
    </>
  );
}

export default WorkExperience;