import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product details page</h2>
      <span> My product is {id} </span>
    </div>
  );
}

export default Product;
