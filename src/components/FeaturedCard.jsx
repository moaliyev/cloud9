import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "../redux/slices/cartSlice";
import { useTranslation } from "react-i18next";
import { setIsSizesModalActive } from "../redux/slices/sizeSlice";

const FeaturedCard = ({ productId }) => {
  const [sizes] = useState(["XS", "S", "M", "L"]);
  const [size, setSize] = useState("XS");
  const [isCustomNameActive, setIsCustomNameActive] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const [customName, setCustomName] = useState("");
  const [customNameError, setCustomNameError] = useState("");
  const [featuredProduct, setFeaturedProduct] = useState({});
  const dispatch = useDispatch();
  const sizeRef = useRef();
  const { isSizesModalActive } = useSelector(state => state.size);
  const { t } = useTranslation();

  useEffect(() => {
    const getProduct = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_GET_PRODUCTS}${productId}/`)
          .then(res => setFeaturedProduct(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [productId]);

  useEffect(() => {
    if (isSizesModalActive) {
      const handler = e => {
        if (!sizeRef.current.contains(e.target)) {
          dispatch(setIsSizesModalActive(false));
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }
    return;
  }, [dispatch, isSizesModalActive]);

  useEffect(() => {
    if (window.innerWidth < 640 && isSizesModalActive)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isSizesModalActive]);

  const handleOnClick = e => {
    setSize(e.target.innerHTML);
  };

  const notify = () => toast.success(t("featured.success"));

  const handleOnSubmit = e => {
    e.preventDefault();
    if (isCustomNameActive && !customName) {
      setCustomNameError("Custom name cannot be empty");
      return;
    }
    const newProduct = isCustomNameActive
      ? {
          ...featuredProduct,
          customName,
          productCount,
          size,
          price: String(Number(featuredProduct.price) + 10),
        }
      : { ...featuredProduct, productCount, size };
    dispatch(addToCart(newProduct));
    setCustomName("");
    setIsCustomNameActive(false);
    setProductCount(1);
    setSize("XS");
    notify();
  };

  return (
    <div className="featuredCard">
      <div className="cardImage">
        <Link to={`/products/${featuredProduct.id}`}>
          <img
            src={`${process.env.REACT_APP_IMAGES}/${featuredProduct.productImage}`}
            alt={featuredProduct.name}
          />
        </Link>
      </div>
      <div className="cardContent">
        <div className="cardInfo">
          <Link>{featuredProduct.name}</Link>
          <span className="cardPrice">$ {featuredProduct.price}</span>
        </div>
        <div className="cardForm">
          <form className="form" onSubmit={handleOnSubmit}>
            <div
              className="sizeControl"
              onClick={() =>
                dispatch(setIsSizesModalActive(!isSizesModalActive))
              }>
              <p htmlFor="size">
                Size: <span className="sizeInputValue">{size}</span>
              </p>
              <ul
                ref={sizeRef}
                className={`selectOption${
                  isSizesModalActive ? " active" : ""
                }`}>
                {sizes.map((item, index) => (
                  <li
                    key={index}
                    onClick={handleOnClick}
                    className={`${item === size && "active"}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="quantityControl">
              <span
                className="decrement"
                onClick={() =>
                  setProductCount(productCount - 1 < 1 ? 1 : productCount - 1)
                }>
                <FaMinus />
              </span>
              <input
                type="number"
                min={1}
                readOnly
                name="quantity"
                value={productCount}
                id="quantity"
              />
              <span
                className="increment"
                onClick={() => setProductCount(productCount + 1)}>
                <FaPlus />
              </span>
            </div>
            <div className="customNameControl">
              <div className="customName">
                <p className={`${isCustomNameActive ? "active" : ""}`}>
                  <span
                    className="checkBox"
                    onClick={() =>
                      setIsCustomNameActive(!isCustomNameActive)
                    }></span>
                  <span className="content">{t("featured.label")}</span>
                </p>
                <p>{t("featured.info")}</p>
              </div>
            </div>
            {isCustomNameActive && (
              <div className="customNameInput">
                <input
                  type="text"
                  name="customName"
                  id="customName"
                  className={customNameError ? "error" : ""}
                  value={customName}
                  onChange={e => {
                    setCustomName(e.target.value.toUpperCase());
                    setCustomNameError("");
                  }}
                />
                {customNameError ? (
                  <span className="errorMsg">{customNameError}</span>
                ) : (
                  ""
                )}
                <p className="gamertagInfo">{t("featured.gamertag")}</p>
                <p>Total Extras: $ 10.00</p>
              </div>
            )}
            <button type="submit">{t("featured.addToCart")}</button>
            <Toaster position="top-right" reverseOrder={false} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
