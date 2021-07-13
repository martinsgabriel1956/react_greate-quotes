import { Route, useParams } from "react-router-dom";

import { HighlightedQuote } from '../../components/HighlightedQuote';
import { Comments } from '../../components/Comments';

const DUMMY_QUOTES = [
  {ID: 'q1', author: 'Gabriel', text: 'Learning React is fun!' },
  {ID: 'q2', author: 'Gabriel', text: 'Learning React is awesome!' }
];

export function QuoteDetail() {
  const { id } = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === id);

  if(!quote) <p>No Quote Found!</p>

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${id}/comments`} component={Comments} />
    </>
  );
}
