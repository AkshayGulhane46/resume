import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route , Routes  } from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home'
import Projects from './components/pages/Projects/Project';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes >      
        <Route path='/' element={<Home/>}/> 
        <Route path='/Projects' element={<Projects/>}/> 
      </Routes >

    </Router>
  );
}


export default App;
