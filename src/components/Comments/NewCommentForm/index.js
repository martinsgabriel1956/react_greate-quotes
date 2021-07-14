import { useEffect, useRef } from "react";

import { Container, Control, Actions } from "./styles";

import { LoadingSpinner } from "../../UI/LoadingSpinner";

import { useHttp } from "../../../hooks/useHttp";
import { addComment } from "../../../services/api";

export function NewCommentForm(props) {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) onAddedComment();
  }, [status, error, onAddedComment]);

  function handleSubmitForm(event) {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    // optional: Could validate here

    // send comment to server
    sendRequest({
      commentData: {
        text: enteredText,
      },
      id: props.id
    });
  }

  return (
    <Container onSubmit={handleSubmitForm}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <Control onSubmit={handleSubmitForm}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </Control>
      <Actions>
        <button className="btn">Add Comment</button>
      </Actions>
    </Container>
  );
}
