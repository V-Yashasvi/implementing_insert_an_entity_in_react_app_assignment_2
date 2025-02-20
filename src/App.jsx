
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovie from './components/AddMovie';
import './App.css'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/add-movie' element={<AddMovie/>}></Route>
      </Routes>
  );
};

export default App;
