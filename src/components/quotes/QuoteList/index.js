import QuoteItem from './QuoteItem';

import { Container } from './styles.js';

export function QuoteList(props) {
  return (
    <>
      <Container>
        {props.quotes.map((quote) => (
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


