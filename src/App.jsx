import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import Notes from './Pages/Notes';

function App() {


  return (
    <>
      <Router  >
        <Routes>
          <Route path="/" element={<DashBoard />}/>
          <Route path="/Notes" element={<Notes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
