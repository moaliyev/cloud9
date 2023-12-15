// LOGO
import Logo from "../assets/images/logo.avif";

// ICONS
import {
  FaUser,
  FaBagShopping,
  FaBars,
  FaX,
  FaAngleRight,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

// REACT-ROUTER
import { Link, useNavigate } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { changeIsNavActive } from "../redux/slices/mobileSlice";

// TRANSLATION
import { useTranslation } from "react-i18next";

// REACT
import { useEffect, useState, useRef } from "react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDropDownActiveApparel, setIsDropDownActiveApparel] = useState(false);
  const [isDropDownActiveTeamWear, setIsDropDownActiveTeamWear] =
    useState(false);

  const dispatch = useDispatch();
  const mobileMenu = useRef();
  const navigate = useNavigate();

  const { userIn } = useSelector(state => state.user);

  const { isNavActive } = useSelector(state => state.mobile);

  useEffect(() => {
    if (isNavActive) {
      const handler = e => {
        if (!mobileMenu.current.contains(e.target)) {
          dispatch(changeIsNavActive(false));
        }
      };
      document.addEventListener("mousedown", handler);

      return () => document.removeEventListener("mousedown", handler);
    }
    return;
  }, [isNavActive, dispatch]);

  useEffect(() => {
    document.body.style.overflow = isNavActive ? "hidden" : "unset";
  }, [isNavActive]);

  useEffect(() => {
    dispatch(changeIsNavActive(false));
  }, [navigate]);

  return (
    <header className="header">
      <p className="info">{t("header.title")}</p>
      <div className="container">
        <div className="row">
          <div className="topSide">
            {/* MOBILE MENU */}
            <div
              className="mobileMenu"
              ref={mobileMenu}
              onClick={() => dispatch(changeIsNavActive(!isNavActive))}>
              <FaBars />
            </div>
            {/* MOBILE MENU */}
            <div className="lang">
              <select
                name="lang"
                id="lang"
                value={i18n.language}
                onChange={e => i18n.changeLanguage(e.target.value)}>
                <option value="en">EN</option>
                <option value="az">AZ</option>
                <option value="tr">TR</option>
              </select>
            </div>
            <Link to="/" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
            <div className="features">
              <Link to={userIn ? "/profile" : "/register"} className="profile">
                <FaUser />
              </Link>
              <Link className="search" to="/search">
                <FaSearch />
              </Link>
              <Link to="cart/" className="cart">
                <FaBagShopping />
              </Link>
            </div>
          </div>
          <nav
            className={isNavActive ? "navBar active" : "navBar"}
            ref={mobileMenu}>
            <FaX onClick={() => dispatch(changeIsNavActive(false))} />
            <ul className="navList">
              <li
                className={`navItem longer${
                  isDropDownActiveApparel
                    ? isDropDownActiveTeamWear
                      ? " active expanded"
                      : " active"
                    : ""
                }`}>
                {isNavActive ? (
                  <div
                    onClick={() =>
                      setIsDropDownActiveApparel(!isDropDownActiveApparel)
                    }>
                    {t("header.navbar.apparel")} <FaPlus /> <FaMinus />
                  </div>
                ) : (
                  <Link to="/">{t("header.navbar.apparel")}</Link>
                )}
                <ul className="dropDown">
                  <li className="dropDownItem">
                    <Link to="/">
                      {t("header.navbar.dropDown.newArrivals")}
                    </Link>
                  </li>
                  <li
                    className={`dropDownItem${
                      isDropDownActiveTeamWear ? " active" : ""
                    }`}>
                    {isNavActive ? (
                      <div
                        onClick={() =>
                          setIsDropDownActiveTeamWear(!isDropDownActiveTeamWear)
                        }>
                        {t("header.navbar.dropDown.allTeamwear")}
                        <FaPlus />
                        <FaMinus />
                      </div>
                    ) : (
                      <Link to="/">
                        {t("header.navbar.dropDown.allTeamwear")}
                        <FaAngleRight />
                      </Link>
                    )}
                    <ul className="insideDropDown">
                      <li className="insideDropDownItem">
                        <Link to="/">2023 Pro Kit</Link>
                      </li>
                      <li className="insideDropDownItem">
                        <Link to="/">
                          {t("header.navbar.dropDown.insideDropDown.jerseys")}
                        </Link>
                      </li>
                      <li className="insideDropDownItem">
                        <Link to="/">
                          {t("header.navbar.dropDown.insideDropDown.jackets")}
                        </Link>
                      </li>
                      <li className="insideDropDownItem">
                        <Link to="/">
                          {t("header.navbar.dropDown.insideDropDown.bottoms")}
                        </Link>
                      </li>
                      <li className="insideDropDownItem">
                        <Link to="/">
                          {t("header.navbar.dropDown.insideDropDown.footwear")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropDownItem">
                    <Link to="/">{t("header.navbar.dropDown.allTops")}</Link>
                  </li>
                  <li className="dropDownItem">
                    <Link to="/">{t("header.navbar.dropDown.allBottoms")}</Link>
                  </li>
                  <li className="dropDownItem">
                    <Link to="/">
                      {t("header.navbar.dropDown.allFootwear")}
                    </Link>
                  </li>
                  <li className="dropDownItem">
                    <Link to="/">
                      {t("header.navbar.dropDown.allAccessories")}
                    </Link>
                  </li>
                  <li className="dropDownItem">
                    <Link to="/all-products">
                      {t("header.navbar.dropDown.shopAll")}
                    </Link>
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
              <li className="navItem longer">
                <Link to="/">{t("header.navbar.collaborations")}</Link>
              </li>
              <li className="navItem">
                <Link to="/">{t("header.navbar.collections")}</Link>
              </li>
              <li className="navItem">
                <Link to="/">{t("header.navbar.london-spitfire")}</Link>
              </li>
              <div className="subLinks">
                <li className="subLinkItem">
                  <Link to="/all-products">
                    {t("header.navbar.subLinks.allProducts")}
                  </Link>
                </li>
                <li className="subLinkItem">
                  <Link to="/cart">{t("header.navbar.subLinks.yourCart")}</Link>
                </li>
                <li className="subLinkItem">
                  <Link to="/profile">
                    {t("header.navbar.subLinks.account")}
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
