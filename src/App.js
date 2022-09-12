
import './App.css';
import React from 'react';
// import { Player } from "react-tuby";
// import "react-tuby/css/main.css";
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';



function App() {


  return (
    <div className="App">

      <Header />
      <div className="app__page">
        <Sidebar/>
        <RecommendedVideos/>
  
      </div>
     
    </div>
  );
}

export default App;
