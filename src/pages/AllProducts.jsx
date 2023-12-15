import Products from "../components/Products";

const AllProducts = () => {
  return (
    <section className="allProducts">
      <div className="container">
        <div className="row">
          <div className="title">All Products</div>
          <Products />
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
