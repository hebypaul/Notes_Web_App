import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import Note from './Pages/Note';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />}/>
          <Route path="/Note" element={<Note />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
