import React from 'react';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Navbar from './layout/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './pages/error-page/error-page';
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
