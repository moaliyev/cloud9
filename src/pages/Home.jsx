// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// HERO IMAGES
import HeroOne from "../assets/images/hero-1.webp";
import HeroTwo from "../assets/images/hero-2.webp";
import HeroThree from "../assets/images/hero-3.webp";
import HeroFour from "../assets/images/hero-4.webp";
import HeroFive from "../assets/images/hero-5.webp";

// COMPONENTS
import Products from "../components/Products";

// ICONS
import { FaPlus, FaMinus } from "react-icons/fa6";

// REACT-ROUTER
import { Link } from "react-router-dom";

// REACT HOOKS
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// REDUCERS
import { addToCart } from "../redux/slices/cartSlice";

// AXIOS
import axios from "axios";

// TOASTER
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [size, setSize] = useState("XS");
  const [sizes, setSizes] = useState(["XS", "S", "M", "L"]);
  const [isSizesModalActive, setIsSizesModalActive] = useState(false);
  const [isCustomNameActive, setIsCustomNameActive] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const [customName, setCustomName] = useState("");
  const [customNameError, setCustomNameError] = useState("");
  const [featuredProduct, setFeaturedProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get(`${process.env.REACT_APP_GET_PRODUCTS}1/`)
        .then(res => setFeaturedProduct(res.data));
    };
    getProduct();
  }, []);

  const dispatch = useDispatch();

  const handleOnClick = e => {
    setSize(e.target.innerHTML);
  };

  const notify = () => toast.success("Added to the cart");

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
    notify();
  };

  return (
    <>
      <section className="hero">
        <Swiper
          modules={[EffectFade, Pagination, Navigation, Autoplay]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}>
          <SwiperSlide>
            <img src={HeroOne} alt="hero" />
            <p className="sliderText">
              <span>Cloud9 </span>
              <span>Legacy Wristband</span>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroTwo} alt="hero" />
            <p className="sliderText">
              <span>Cloud9</span>
              <span>Summer Jersey</span>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroThree} alt="hero" />
            <p className="sliderText">
              <span>2023</span>
              <span>Worlds Collection</span>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroFour} alt="hero" />
            <p className="sliderText">
              <span>Cloud9 2023</span>
              <span>Legacy Jersey</span>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroFive} alt="hero" />
            <p className="sliderText">
              <span>Cloud9</span>
              <span>Core Collection</span>
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="products">
        <div className="container">
          <div className="row">
            <h3 className="title">2023 pro kit</h3>
            <Products />
          </div>
        </div>
      </section>
      <section className="featured">
        <div className="container">
          <div className="row">
            <h2 className="title">FEATURED PRODUCT</h2>
            <div className="card">
              <div className="cardImage">
                <Link to="/">
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
                        setIsSizesModalActive(!isSizesModalActive)
                      }>
                      <p htmlFor="size">
                        Size: <span className="sizeInputValue">{size}</span>
                      </p>
                      <ul
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
                          setProductCount(
                            productCount - 1 < 1 ? 1 : productCount - 1
                          )
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
                          <span className="content">
                            Add Custom Name (ALL CAPS) ($ 10.00)
                          </span>
                        </p>
                        <p>
                          Choose the custom name on the back. Nonrefundable.
                        </p>
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
                            setCustomName(e.target.value);
                            setCustomNameError("");
                          }}
                        />
                        {customNameError ? (
                          <span className="errorMsg">{customNameError}</span>
                        ) : (
                          ""
                        )}
                        <p className="gamertagInfo">
                          Enter Gamertag. Max 16 Chars, ALL CAPS
                        </p>
                        <p>Total Extras: $ 10.00</p>
                      </div>
                    )}
                    <button type="submit">ADD TO CART</button>
                    <Toaster position="top-right" reverseOrder={false} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
