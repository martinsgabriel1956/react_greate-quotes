import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./styles/global.js";

import { AllQuotes } from "./pages/AllQuotes";
import { NewQuote } from "./pages/NewQuote";
import { QuoteDetail } from "./pages/QuoteDetail";

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact  component={AllQuotes} />
          <Route path="/quotes/:id" component={NewQuote} />
          <Route path="/new-quote" component={QuoteDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
