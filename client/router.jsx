import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { LoginContainer, HomeContainer, BoardContainer } from './containers/';
import { Nav, Details} from './components/';

const createRouter = () => (
  <Router>
    <div className='container-fluid'>
      <Route exact path='/' render={ () => <Redirect to='/home' /> } />
      <Route path='/login' component={ LoginContainer } />
      <Route path='/home' component={ HomeContainer } />
      <Route path='/board' component={ BoardContainer } />
    </div>
  </Router>
);

export default createRouter;