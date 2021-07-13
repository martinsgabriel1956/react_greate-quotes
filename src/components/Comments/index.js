import { useState } from 'react';

import { Container } from './styles'

import { NewCommentForm } from './NewCommentForm';

export function Comments() {
  const [isAddingComment, setIsAddingComment] = useState(false);

  function handleStartAddComment() {
    setIsAddingComment(true);
  };
  
  return (
    <Container>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={handleStartAddComment}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </Container>
  );
};