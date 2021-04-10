import React from 'react';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Navbar from './layout/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './pages/error-page/error-page';

import ViewUser from './components/users/ViewUser';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/users/add' component={AddUser} />
          <Route exact path='/users/edit/:id' component={EditUser} />
          <Route exact path='/users/:id' component={ViewUser} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
