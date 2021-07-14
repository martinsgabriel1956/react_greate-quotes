import { Link } from 'react-router-dom';

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
      <Link to={`/quotes/${props.id}`} className='btn' >
        View Fullscreen
      </Link>
    </Container>
  );
};


