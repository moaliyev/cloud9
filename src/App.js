// REACT-ROUTER
import { Route, Routes } from "react-router-dom";

// SCSS
import "./assets/scss/index.scss";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import AllProducts from "./pages/AllProducts";
import Search from "./pages/Search";

// REDUX
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, setUserIn } from "./redux/slices/userSlice";

// AXIOS
import axios from "axios";

function App() {
  const { isNavActive } = useSelector(state => state.mobile);
  const { isSizesModalActive } = useSelector(state => state.size);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const body = { token };
    if (token !== null) {
      axios
        .post(process.env.REACT_APP_CHECK_LOGIN, body)
        .then(res => {
          dispatch(setUserIn(true));
          dispatch(setUser(res.data));
        })
        .catch(err => {
          dispatch(setUserIn(false));
          dispatch(setUser({}));
          localStorage.removeItem("token");
        });
    }
  }, [dispatch]);
  return (
    <div
      className={`primaryContainer ${
        (isNavActive || (window.innerWidth <= 640 && isSizesModalActive)) &&
        "darkFilter"
      }`}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart/" element={<Cart />} />
          <Route path="all-products/" element={<AllProducts />} />
          <Route path="login/" element={<Login />} />
          <Route path="register/" element={<Register />} />
          <Route path="profile/" element={<Profile />} />
          <Route path="search/" element={<Search />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="products/:productId" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
