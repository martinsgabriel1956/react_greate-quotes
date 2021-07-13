import CommentItem from './CommentItem';

import { Container } from './styles';

export function CommentsList(props) {
  return (
    <Container>
      {props.comments.map(comment => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </Container>
  );
};