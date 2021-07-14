import { useHistory, useLocation } from 'react-router-dom';
import { QuoteItem } from '../QuoteItem';

import { Container, Sorting } from './styles.js';

function sortQuotes (quotes, ascending) {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

export function QuoteList(props) {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  function handleChangeSort() {
    history.push(`/quotes?sort=${isSortingAscending ? 'desc' : 'asc'}`);
  }

  return (
    <>
      <Container>
        <Sorting>
          <button onClick={handleChangeSort}>
            Sort {isSortingAscending ? 'Descending' : 'Ascending'}
          </button>
        </Sorting>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </Container>
    </>
  );
};


