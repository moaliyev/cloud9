import { useTranslation } from "react-i18next";
import Products from "../components/Products";

const AllProducts = () => {
  const { t } = useTranslation();
  return (
    <section className="allProducts">
      <div className="container">
        <div className="row">
          <div className="title">{t("header.navbar.subLinks.allProducts")}</div>
          <Products />
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
