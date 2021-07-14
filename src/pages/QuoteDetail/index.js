import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import { HighlightedQuote } from "../../components/Quotes/HighlightedQuote";
import { Comments } from "../../components/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Gabriel", text: "Learning React is fun!" },
  { id: "q2", author: "Gabriel", text: "Learning React is awesome!" },
];

export function QuoteDetail() {
  const match = useRouteMatch();
  const { id } = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === id);

  if (!quote) <p>No Quote Found!</p>;

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} component={Comments} />
    </>
  );
}
