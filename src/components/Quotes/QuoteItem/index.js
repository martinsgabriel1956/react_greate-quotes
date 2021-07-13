import { Container } from './styles';

import { Link } from '../QuoteItem';

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


