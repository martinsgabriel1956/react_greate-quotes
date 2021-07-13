import { Route, useParams } from "react-router-dom";

import { Comments } from '../../components/Comments';

export function QuoteDetail() {
  const { id } = useParams();

  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{id}</p>
      <Route path={`/quotes/${id}/comments`} component={Comments } />
    </>
  );
}
