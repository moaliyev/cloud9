import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [param, setParam] = useState("");

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(process.env.REACT_APP_GET_PRODUCTS)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    };
    getData();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const result = data.filter(item =>
      item.name.toLowerCase().includes(param.toLowerCase())
    );
    if (!result.length) {
      toast.error("No matching result");
      return;
    }
    setFilteredData(result);
  };

  return (
    <section className="searchSection">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container">
        <div className="row">
          <div className="title">{t("search.title")}</div>
          <div className="searchBar">
            <FaSearch />
            <form onSubmit={handleSubmit}>
              <input
                autoFocus
                type="text"
                value={param}
                onChange={e => setParam(e.target.value)}
                placeholder={`${t("search.title")}...`}
              />
            </form>
          </div>
          <div className="cardBox">
            {filteredData.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
