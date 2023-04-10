import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import { GoMarkGithub } from "react-icons/go";
import { DiReact,DiHtml5,DiCss3, DiNodejs ,DiJira ,DiJavascript1 ,DiJava,} from "react-icons/di";
import {SiSelenium} from 'react-icons/si';
function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
    <div className='page'>
      <div className='main'>
        <div className='name-container'>
              <h1>Akshay Gulhane</h1>
        </div>
        <div className='description-container'>
              <p>Software Engineer</p>
        </div>
        <div className='skills-container'>
               <div className='icon'>
                    <DiReact/>
                    <DiHtml5/>
                    <DiCss3/>
                    <DiNodejs/>
                    <DiJira/>
                    <DiJavascript1/>
                    <DiJava/>
                    <SiSelenium/>
               </div>
        </div>
      </div> 
      <div className='image-container'>
           <img src="/Images/IMG_0536.jpg" alt="hello"/>
      </div>
      </div>
    </>
  );
}

export default HeroSection;