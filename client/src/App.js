import React from 'react';
import './App.scss';
import Home from './pages/home';
import Nav from './components/nav';
import Solutions from './pages/solutions';
import Services from './pages/services';
import RequestAccess from './pages/requestAccess';
import CaseStudies from './pages/caseStudies';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Nav />
      </div>
        <Routes>
          <Route 
              path="/" 
              element={<Home />} 
              />
            <Route 
              path="/ramen" 
              element={<Solutions />} 
            />
            <Route 
              path="/ramen/show/:id" 
              element={<Services />} 
              />
              <Route 
              path="/ingredient/show/:id" 
              element={<CaseStudies />} 
              />
            <Route 
              path="/signup" 
              element={<RequestAccess />} 
              />              
          </Routes>
      </div>
    </Router>
  );
}

export default App;
