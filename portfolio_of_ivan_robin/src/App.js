import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  return(
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/about' element={<About />}/>
                  <Route path='/projects' element={<Projects />}/>
                  <Route path='/contact' element={<Contact />}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App;
