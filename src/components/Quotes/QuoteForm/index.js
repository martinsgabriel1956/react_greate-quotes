import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import { Card } from "../../UI/Card";
import { Container, Loading, Control, Actions } from "./styles";

import { LoadingSpinner } from "../../UI/LoadingSpinner";

export function QuoteForm(props) {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function handleSubmitForm(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  function handleFormFocused() {
    setIsEntering(true);
  }
  
  function handleFinishingEntering() {
    setIsEntering(false);
  }

  return (
    <>
      <Prompt when={isEntering} message={location => 'Are you sure you want to leave? All your entered data will be lost!'} />
      <Card>
        <Container onFocus={handleFormFocused} onSubmit={handleSubmitForm}>
          {props.isLoading && (
            <Loading>
              <LoadingSpinner />
            </Loading>
          )}

          <Control>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </Control>
          <Control>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </Control>
          <Actions>
            <button onClick={handleFinishingEntering} className="btn">Add Quote</button>
          </Actions>
        </Container>
      </Card>
    </>
  );
}
