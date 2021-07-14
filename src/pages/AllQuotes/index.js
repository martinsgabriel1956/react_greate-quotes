import { useEffect } from 'react';
import { QuoteList } from '../../components/Quotes/QuoteList';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner';
import { useHttp } from '../../hooks/useHttp';
import { getAllQuotes } from '../../services/api';
import { NoQuotesFound } from '../../components/Quotes/NoQuotesFound';

export function AllQuotes() {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if(status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  };

  if(error) {
    return (
      <p className="centered focused">{error}</p>
    );
  };

  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return (
      <NoQuotesFound />
    );
  }

  return (
    <>
      <QuoteList quotes={ loadedQuotes } />
    </>
  );
}
