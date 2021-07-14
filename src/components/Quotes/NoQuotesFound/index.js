import { Link } from 'react-router-dom';
import { Container } from './styles';

export function NoQuotesFound() {
  return (
    <Container>
      <p>No quotes found!</p>
      <Link to="/new-quote" className='btn'>
        Add a Quote
      </Link>
    </Container>
  );
};


