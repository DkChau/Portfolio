import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import NavBar from './Components/NavBar'
import Home from './Pages/Home';
import LoadingScreen from './Components/LoadingScreen';

function App() {

  const location = useLocation();

  return (
    <>
      <NavBar/>
      <AnimatePresence exitBeforeEnter >
        <Routes location={location} key={location.key}>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/projects' element={<LoadingScreen/>}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
