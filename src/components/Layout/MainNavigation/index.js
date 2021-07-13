import { Container, Logo, Nav } from "./styles";

import { NavLink } from "react-router-dom";

export function MainNavigation() {
  return (
    <Container>
      <Logo>Great Quotes</Logo>
        <Nav>
          <ul>
            <li>
              <NavLink to="/quotes" activeClassName={"active"}>
                All Quotes
              </NavLink>
            </li>
            <li>
              <NavLink to="/new-quote" activeClassName={"active"}>
                Add a Quote
              </NavLink>
            </li>
          </ul>
        </Nav>
    </Container>
  );
}
