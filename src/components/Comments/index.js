import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

import { useHttp } from '../../hooks/useHttp';
import { getAllComments } from '../../services/api';

import { NewCommentForm } from './NewCommentForm';
import { LoadingSpinner } from '../UI/LoadingSpinner';
import { CommentsList } from '../Comments/CommentsList'

export function Comments() {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  const { id } = params;
  
  useEffect(() => {
    sendRequest(id);
  }, [id, sendRequest]);


  function handleStartAddComment() {
    setIsAddingComment(true);
  };

  const handleAddedComment = useCallback(() => {
    sendRequest(id)
  }, [sendRequest, id])

  let comments;

  if(status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if(status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className="centered">No Comments were added yet!</p>
  }
  
  return (
    <Container>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={handleStartAddComment}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm id={params.id} onAddedComment={handleAddedComment} />}
      {comments}
    </Container>
  );
};