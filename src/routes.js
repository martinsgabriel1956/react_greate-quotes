import { Switch, Route, Redirect } from "react-router-dom";

import "./styles/global.js";

import { AllQuotes } from "./pages/AllQuotes";
import { NewQuote } from "./pages/NewQuote";
import { NotFound } from "./pages/NotFound";
import { QuoteDetail } from "./pages/QuoteDetail";
import { Layout } from "./components/Layout/index.js";

export function Routes() {
  return (
    <>
      <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact component={AllQuotes} />
            <Route path="/quotes/:id" component={QuoteDetail} />
            <Route path="/new-quote" component={NewQuote} />
            <Route path="*" component={NotFound} />
          </Switch>
        
      </Layout>
    </>
  );
}
