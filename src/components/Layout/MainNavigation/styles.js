import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 0 10%;
  justify-content: space-between;
  align-items: center;
  background-color: #008080;
`;

export const Logo = styled.div`
  font-size: 2rem;
  color: white;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 1.5rem;
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
    color: #88dfdf;

    &:hover,
    &:active,
    &.active {
      color: #e6fcfc;
    }
  }
`;
