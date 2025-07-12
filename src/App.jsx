import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
  <Route
    path="/"
    element={<News key="general" pageSize={6} country="us" category="General" />}
  />
  <Route
    path="/Business"
    element={<News key="business" pageSize={6} country="us" category="Business" />}
  />
  <Route
    path="/Entertainment"
    element={<News key="entertainment" pageSize={6} country="us" category="Entertainment" />}
  />
  <Route
    path="/General"
    element={<News key="general2" pageSize={6} country="us" category="General" />}
  />
  <Route
    path="/Health"
    element={<News key="health" pageSize={6} country="us" category="Health" />}
  />
  <Route
    path="/Sports"
    element={<News key="sports" pageSize={6} country="us" category="Sports" />}
  />
  <Route
    path="/Science"
    element={<News key="science" pageSize={6} country="us" category="Science" />}
  />
  <Route
    path="/Technology"
    element={<News key="technology" pageSize={6} country="us" category="Technology" />}
  />
</Routes>

        </Router>
      </div>
    );
  }
}
