import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Route exact path="/" component={Home} />
<Route exact path="/about" component={About}/>
<Route exact path="/skills" component={Skills}/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
