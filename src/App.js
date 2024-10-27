import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import UniversityList from './Components/UniversityList';
// import Footer from './Components/Footer';
import LoadingBar from 'react-top-loading-bar'


function App() {
  const [progress, setProgress] = useState(0)
  const settProgress = (progress)=>{
    setProgress(progress)
  }
  return (
    <>
      <Navbar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <UniversityList setProgress={settProgress}/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
