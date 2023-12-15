import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, productImage }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <Link to={`/products/${id}`}>
          <img
            src={`${process.env.REACT_APP_IMAGES}/${productImage}`}
            alt={name}
          />
        </Link>
      </div>
      <div className="cardInfo">
        <p className="cardTitle">{name}</p>
        <p className="cardPrice">$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
