import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register'
import ProfilePage from '../pages/Profile';


function App() {
  return (
    <Login/>
  );
}

export default App;
