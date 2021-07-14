import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import { HighlightedQuote } from "../../components/Quotes/HighlightedQuote";
import { Comments } from "../../components/Comments";

import { useHttp } from '../../hooks/useHttp';
import { getSingleQuote } from '../../services/api';
import { useEffect } from "react";
import { LoadingSpinner } from "../../components/UI/LoadingSpinner";

function QuoteDetail() {
  const match = useRouteMatch();
  const { id } = useParams();

  const { sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if(status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if(error) <p className="centered">{error}</p>

  if (!loadedQuote) <p>No Quote Found!</p>;

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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

export default QuoteDetail;