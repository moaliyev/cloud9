import { useParams } from "react-router-dom";
import FeaturedCard from "../components/FeaturedCard";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <section className="productDetails">
      <div className="container">
        <div className="row">
          <FeaturedCard productId={productId} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
