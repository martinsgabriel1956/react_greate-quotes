import { useRef } from 'react';

import { Card } from '../../UI/Card';
import { Container, Loading, Control, Actions } from './styles';

import { LoadingSpinner } from '../../UI/LoadingSpinner';

export function QuoteForm(props) {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <Container onSubmit={submitFormHandler}>
        {props.isLoading && (
          <Loading>
            <LoadingSpinner />
          </Loading>
        )}

        <Control>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </Control>
        <Control>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </Control>
        <Actions>
          <button className='btn'>Add Quote</button>
        </Actions>
      </Container>
    </Card>
  );
};