import { QuoteList } from '../../components/Quotes/QuoteList';

const DUMMY_QUOTES = [
  {ID: 'q1', author: 'Gabriel', text: 'Learning React is fun!' },
  {ID: 'q2', author: 'Gabriel', text: 'Learning React is awesome!' }
];

export function AllQuotes() {
  return (
    <>
      <QuoteList quotes={ DUMMY_QUOTES } />
    </>
  );
}
