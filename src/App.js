import React from 'react'
import "./App.css";
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProfileContent from './components/ProfileContent';



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <ProfileContent />g
    </div>
  );
};

export default App;
