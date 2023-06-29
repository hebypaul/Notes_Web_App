import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import Notes from './Pages/Notes';
import Note from './Pages/Note';

function App() {


  return (
    <>
      <Router  >
        <Routes>
          <Route path="/" element={<DashBoard />}/>
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Notes/:noteId" element={<Note />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
