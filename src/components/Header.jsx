// LOGO
import Logo from "../assets/images/logo.avif";

// ICONS
import { FaUser, FaBagShopping, FaBars, FaX } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

// REACT-ROUTER
import { Link } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { changeIsNavActive } from "../redux/slices/mobileSlice";

// TRANSLATION
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const { isNavActive } = useSelector(state => state.mobile);

  const dispatch = useDispatch();

  return (
    <header className="header">
      <p className="info">{t("header.title")}</p>
      <div className="container">
        <div className="row">
          <div className="topSide">
            {/* MOBILE MENU */}
            <div
              className="mobileMenu"
              onClick={() => dispatch(changeIsNavActive())}>
              <FaBars />
            </div>
            {/* MOBILE MENU */}
            <div className="lang">
              <select
                name="lang"
                id="lang"
                value={i18n.language}
                onChange={e => i18n.changeLanguage(e.target.value)}>
                <option value="">{t("header.language")}</option>
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
          <nav className={isNavActive ? "navBar active" : "navBar"}>
            <FaX onClick={() => dispatch(changeIsNavActive())} />
            <ul className="navList">
              <li className="navItem">
                <Link to="/">{t("header.navbar.apparel")}</Link>
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
                <Link to="/">{t("header.navbar.worlds-2023")}</Link>
              </li>
              <li className="navItem">
                <Link to="/">{t("header.navbar.summer-2023")}</Link>
              </li>
              <li className="navItem">
                <Link to="/">{t("header.navbar.pro-kit")}</Link>
              </li>
              <li className="navItem">
                <Link to="/">{t("header.navbar.collaborations")}</Link>
              </li>
              <li className="navItem">
                <Link to="/">{t("header.navbar.collections")}</Link>
              </li>
              <li className="navItem">
                <Link to="/">{t("header.navbar.london-spitfire")}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
