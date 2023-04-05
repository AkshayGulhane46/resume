import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route , Routes  } from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home'
import Projects from './components/pages/Projects/Project';
import WorkExperience from './components/pages/WorkExperiencePage/WorkExperience';
import Education from './components/pages/EducationPage/Education';
import Contact from './components/pages/ContactPage/Contact';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes >      
        <Route path='/' element={<Home/>}/> 
        <Route path='/WorkExperience' element={<WorkExperience/>}/> 
        <Route path='/Projects' element={<Projects/>}/> 
        <Route path='/Education' element ={<Education/>}/>
        <Route path='/Contact' element ={<Contact/>}/>

      </Routes >

    </Router>
  );
}


export default App;
