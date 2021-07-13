import { useParams } from "react-router-dom";

export function QuoteDetail() {
  const params = useParams();

  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{params.id}</p>
    </>
  );
}
