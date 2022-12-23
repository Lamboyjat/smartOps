import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import Ships from './components/Ships/Ships'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Ships />
      <Home />
    </div>
  );
}

export default App;
