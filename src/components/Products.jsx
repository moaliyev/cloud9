import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios
        .get(process.env.REACT_APP_GET_PRODUCTS)
        .then(data => setProducts(data.data));
    };
    getData();
  }, []);
  return (
    <div className="cardBox">
      {products.map(item => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Products;
