import { useParams } from "react-router-dom";
import { MainHeader } from "../../components/MainHeader";

export function ProductDetails() {
  const params = useParams();
  console.log(params.id);

  return (
    <>
      <MainHeader />
      <main>
        <h1>Product Detail</h1>
        <p>{params.id}</p>
      </main>
    </>
  );
}
