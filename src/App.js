import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={progress} height={3} />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key='general' pageSize={12} country='in' category='general' />} />
          <Route exact path='/business' element={<News setProgress={setProgress} key='business' pageSize={12} country='in' category='business' />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={12} country='in' category='entertainment' />} />
          <Route exact path='/general' element={<News setProgress={setProgress} key='general1' pageSize={12} country='in' category='general' />} />
          <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize={12} country='in' category='health' />} />
          <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize={12} country='in' category='science' />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={12} country='in' category='sports' />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={12} country='in' category='technology' />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
