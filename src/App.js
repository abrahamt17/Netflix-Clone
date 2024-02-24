import './App.css';
 import { Route, Routes } from 'react-router-dom';
  import PopularMoviesComponent from './Comps/Main';
import Navbar from './Comps/Navbar';

// import { Nav } from 'react-bootstrap';
import Home from './Comps/Homee';
import Main from './Comps/Main';
//import Home from './Comps/Main';
// import Row from './Comps/row';
function App() {
    return (
   <div>
           
           
            <Navbar/>
            <Routes>
              <Route path='/'  element={<Home/>} />
            </Routes>
   
</div>
    )
   
}

export default App;