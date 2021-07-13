import { MainHeader } from "../../components/MainHeader";
import { Route } from "react-router-dom";

export function Products() {
  return (
    <>
      <MainHeader />
      <main>
        <h1>Products Page</h1>
        <ul>
          <li>Book</li>
          <li>Notebook</li>
          <li>Paper</li>
        </ul>
        <Route path="/new-user">
          <p>Welcome, new user</p>
        </Route>
      </main>
    </>
  );
}
