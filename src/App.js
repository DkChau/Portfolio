import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Home from './Pages/Home';
import About from './Pages/About';
import NavBar from './Components/NavBar';
import Projects from './Pages/Projects';
import UniqueProject from './Pages/UniqueProject'

function App() {

  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <NavBar/>
        <Routes location={location} key={location.key}>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/projects/:id' element={<UniqueProject/>}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
