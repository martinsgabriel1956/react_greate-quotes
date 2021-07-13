import { Container } from './styles';

export function NoQuotesFound() {
  return (
    <Container>
      <p>No quotes found!</p>
      <a className='btn'>
        Add a Quote
      </a>
    </Container>
  );
};


