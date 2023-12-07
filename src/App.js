// REACT-ROUTER
import { Route, Routes } from "react-router-dom";

// SCSS
import "./assets/scss/index.scss";

// COMPONENTS
import Header from "./components/Header";

// PAGES
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  const { isNavActive } = useSelector(state => state.mobile);
  return (
    <div className={`primaryContainer ${isNavActive && "darkFilter"}`}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart/" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
