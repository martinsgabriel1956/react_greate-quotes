import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./styles/global.js";

import { Layout } from "./components/Layout/index.js";
import { LoadingSpinner } from "./components/UI/LoadingSpinner/index.js";

const NewQuote = lazy(() => import ("./pages/NewQuote"));
const QuoteDetail = lazy(() => import ("./pages/QuoteDetail"));
const NotFound = lazy(() => import ("./pages/NotFound"));
const AllQuotes = lazy(() => import ("./pages/AllQuotes"));

export function Routes() {
  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact component={AllQuotes} />
            <Route path="/quotes/:id" component={QuoteDetail} />
            <Route path="/new-quote" component={NewQuote} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
}
