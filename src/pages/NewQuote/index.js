import { QuoteForm } from '../../components/Quotes/QuoteForm';

export function NewQuote() {
  function handleAddQuote(quoteData) {
    console.log(quoteData)
  }

  return (
    <>
      <QuoteForm onAddQuote={handleAddQuote} />
    </>
  );
}
