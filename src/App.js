import React from "react";
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav /> 
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="*" exact component={NotFound} />
      </Switch>       
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;