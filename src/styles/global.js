import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  font-family: 'Noto Sans JP', sans-serif;
}

body {
  font-family: sans-serif;
  margin: 0;
  background-color: #e7f8f8;
}

.centered {
  margin: 3rem auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.focused {
  font-size: 3rem;
  font-weight: bold;
  color: white;
}

.btn {
  text-decoration: none;
  background-color: teal;
  color: white;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  border: 1px solid teal;
  cursor: pointer;
}

.btn:hover,
.btn:active {
  background-color: #11acac;
  border-color: #11acac;
}

.btn--flat {
  cursor: pointer;
  font: inherit;
  color: teal;
  border: none;
  background-color: none;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
}

.btn--flat:hover,
.btn--flat:active {
  background-color: teal;
  color: white;
}

`;