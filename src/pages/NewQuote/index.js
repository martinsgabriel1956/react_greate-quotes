import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { QuoteForm } from '../../components/Quotes/QuoteForm';
import { useHttp } from '../../hooks/useHttp';

import { addQuote } from '../../services/api';

function NewQuote() {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if(status === 'completed') {
      history.push('/quotes');
    };
  }, [status, history]);

  function handleAddQuote(quoteData) {
    sendRequest(quoteData);

    history.push('/quotes');
  }

  return (
    <>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={handleAddQuote} />
    </>
  );
}

export default NewQuote;