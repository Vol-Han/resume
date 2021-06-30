import React from 'react';
import './app.css';
import './variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';

class App extends React.Component {
  render() {
    return (
      <div className="app" style={{ position: 'relative', overflowX: 'hidden' }}>
        <div className="particles">
          <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <Header /> 
        <Footer />
      </div>
    );
  }
}

export default App;