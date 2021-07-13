import { NavLink } from 'react-router-dom';
import { Container } from './styles';

export function MainHeader() {
  return (
    <Container>
      <nav>
        <ul>
          <li><NavLink activeClassName={'active'} to="/">Home</NavLink></li>
          <li><NavLink activeClassName={'active'} to="/login">Login</NavLink></li>
          <li><NavLink activeClassName={'active'} to="/register">Register</NavLink></li>
        </ul>
      </nav>
    </Container>
  );
};