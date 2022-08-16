import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Page/Home/Home';
import Navbar from './Page/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { createContext,} from 'react';
import { useState } from 'react';
import AboutMe from './Page/Home/AboutMe';

export const ThemeColor = createContext(null)


function App() {
const [theme, setTheme] = useState('light')

const handleTheme = (current) => {
  setTheme((current) => current === 'light' ? 'dark' : 'light')
}
  return (
    <ThemeColor.Provider value={{theme, handleTheme}}>
    <div className="App" id={theme}>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        <ToastContainer />
    </div>
    </ThemeColor.Provider>
  );
}

export default App;
