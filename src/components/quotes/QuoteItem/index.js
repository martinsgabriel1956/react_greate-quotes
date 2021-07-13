import { Container } from './styles';

export function QuoteItem(props) {
  return (
    <Container>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className='btn'>
        View Fullscreen
      </a>
    </Container>
  );
};


