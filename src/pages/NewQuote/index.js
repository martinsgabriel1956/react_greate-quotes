import { useHistory } from 'react-router-dom';
import { QuoteForm } from '../../components/Quotes/QuoteForm';

export function NewQuote() {
  const history = useHistory();

  function handleAddQuote(quoteData) {
    console.log(quoteData);

    history.push('/quotes');
  }

  return (
    <>
      <QuoteForm onAddQuote={handleAddQuote} />
    </>
  );
}
