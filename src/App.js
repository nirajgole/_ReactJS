import React, { useState, useMemo } from 'react';
import About from './pages/about';
import Home from './pages/home/home';
import Contact from './pages/contact';
import Navbar from './layout/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './pages/error-page/error-page';
import ViewUser from './components/users/ViewUser';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import { UserContext } from './components/users/UserContext';
import GridView from './layout/card/grid-view';

function App() {
  const [users, setUsers] = useState([]);

  const providerValue = useMemo(() => ({ users, setUsers }), [users, setUsers]);
  return (
    <UserContext.Provider value={providerValue}>
      <Router basename='/REACT-CRUD-APP'>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/users/add' component={AddUser} />
            <Route exact path='/users/edit/:id' component={EditUser} />
            <Route exact path='/users/:id' component={ViewUser} />
            <Route exact path='/grid-view' component={GridView} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
