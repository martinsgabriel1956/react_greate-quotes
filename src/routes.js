import { BrowserRouter, Switch, Router } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

import './styles/global.css';

export function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Router path="/" exact component={Home} />
        <Router path="/login" component={Login} />
        <Router path="/register" component={Register} />
      </Switch>  
    </BrowserRouter>
  );
}