// LOGO
import Logo from "../assets/images/logo.avif";

// ICONS
import { FaUser, FaBagShopping, FaBars, FaX } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

// REACT-ROUTER
import { Link } from "react-router-dom";

// REACT HOOKS
import { useState } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { changeIsNavActive } from "../redux/slices/mobileSlice";

const Header = () => {
  const { isNavActive } = useSelector(state => state.mobile);

  const dispatch = useDispatch();

  return (
    <header className="header">
      <p className="info">
        Receive an exclusive 2023 LCS Championship poster with every 2023 Legacy
        Wristband purchase!
      </p>
      <div className="container">
        <div className="row">
          <div className="topSide">
            {/* MOBILE MENU */}
            <div className="mobileMenu" onClick={dispatch(changeIsNavActive())}>
              <FaBars />
            </div>
            {/* MOBILE MENU */}
            <div className="lang">
              <select name="lang" id="lang">
                <option value="">Language</option>
                <option value="en">EN</option>
                <option value="az">AZ</option>
                <option value="tr">TR</option>
              </select>
            </div>
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="features">
              <div className="profile">
                <FaUser />
              </div>
              <div className="search">
                <FaSearch />
              </div>
              <div className="cart">
                <FaBagShopping />
              </div>
            </div>
          </div>
          <nav className={`navBar${isNavActive ? " active" : ""}`}>
            <FaX onClick={dispatch(changeIsNavActive())} />
            <ul className="navList">
              <li className="navItem">
                <Link to="/">Apparel</Link>
                <ul className="dropDown">
                  <li className="dropDownItem">
                    <Link>New Arrivals</Link>
                  </li>
                  <li className="dropDownItem">
                    <Link>All Teamwear</Link>
                  </li>
                  <li className="dropDownItem">
                    <Link>All Tops</Link>
                  </li>
                  <li className="dropDownItem">
                    <Link>All Bottoms</Link>
                  </li>
                  <li className="dropDownItem">
                    <Link>All Footwear</Link>
                  </li>
                  <li className="dropDownItem">
                    <Link>All Accessories</Link>
                  </li>
                  <li className="dropDownItem">
                    <Link>Shop All</Link>
                  </li>
                </ul>
              </li>
              <li className="navItem">
                <Link to="/">Worlds 2023</Link>
              </li>
              <li className="navItem">
                <Link to="/">Summer 2023</Link>
              </li>
              <li className="navItem">
                <Link to="/">Pro Kit</Link>
              </li>
              <li className="navItem">
                <Link to="/">Collaborations</Link>
              </li>
              <li className="navItem">
                <Link to="/">Collections</Link>
              </li>
              <li className="navItem">
                <Link to="/">London Spitfire</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
