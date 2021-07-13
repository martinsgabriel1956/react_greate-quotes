import { Route } from "react-router-dom";
import { MainHeader } from "../../components/MainHeader";

export function Home() {
  return (
    <>
      <MainHeader />
      <main>
        <h1>Home</h1>
        <Route path="/new-user">
          <p>Welcome, new user</p>
        </Route>
      </main>
    </>
  );
}
