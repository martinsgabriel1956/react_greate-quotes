import { useRef } from 'react';

import { Container, Control, Actions } from './styles';

export function NewCommentForm(props)  {
  const commentTextRef = useRef();

  function handleSubmitForm(event) {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  };

  return (
    <Container onSubmit={handleSubmitForm}>
      <Control onSubmit={handleSubmitForm}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </Control>
      <Actions>
        <button className='btn'>Add Comment</button>
      </Actions>
    </Container>
  );
};