import { Container } from './styles';

export function HighlightedQuote(props) {
  return (
    <Container >
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </Container>
  );
};


