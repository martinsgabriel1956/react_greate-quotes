import { Route, useParams } from "react-router-dom";

import { HighlightedQuote } from '../../components/Quotes/HighlightedQuote';
import { Comments } from '../../components/Comments';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Gabriel', text: 'Learning React is fun!' },
  {id: 'q2', author: 'Gabriel', text: 'Learning React is awesome!' }
];

export function QuoteDetail() {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.id);

  if(!quote) <p>No Quote Found!</p>

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.id}/comments`} component={Comments} />
    </>
  );
}
