import React from 'react';
import './App.scss';
import Home from './pages/home';
import Nav from './components/nav';
import Footer from './sections/footer';
import Solutions from './pages/solutions';
import Services from './pages/services';
import RequestAccess from './pages/requestAccess';
import CaseStudies from './pages/caseStudies';
import Texture from './assets/home-texture.jpg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="bg-img">
          <img src={Texture} alt="" style={{width: "100vw", opacity: "0.5%"}} />
      </div>
      <div className="container-nav">
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
          <Footer />
      </div>
    </Router>
  );
}

export default App;
