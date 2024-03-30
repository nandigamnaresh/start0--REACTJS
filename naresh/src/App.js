import './App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Feature from './feature';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom';


function Header()
{
  return(
    <div>
      <ul>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/contact'>CONTACT</Link></li>
        <li><Link to='/feature'>FEATURE</Link></li>
      </ul>
    </div>
  )
}




function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/feature' element={<Feature/>}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
