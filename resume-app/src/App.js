import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';

class App extends React.Component {
  render() {
    return (
      <div className="app" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute'}}>
          <Particles height="95vh" width="95vw" params={particlesConfig} />
        </div>
        <Header /> 
        <Footer />
      </div>
    );
  }
}

export default App;