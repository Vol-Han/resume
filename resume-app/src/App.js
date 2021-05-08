import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';

const App = () => {
  return (
    <>
      <span style={{ position: 'absolute'}}>
        <Particles height="95vh" width="100vw" params={particlesConfig} />
      </span>
      <Header />
      <Footer />
    </>
  );
}

export default App;