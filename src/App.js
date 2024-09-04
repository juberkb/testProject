import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Navbar from './Navbar.js';
import MyForm from "./Myform.js"
import Signup from './Signup.js';


function App() {
  const data = [
    { name: 'Home', link: '/' },
   
  ];

  return (
    <div className="App">
      <header className="App-header">
      <ChakraProvider>
        <Router>
          <Navbar data={data} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studentform" element={<MyForm />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
        </ChakraProvider>
      </header>
    </div>
  );
}

export default App;
