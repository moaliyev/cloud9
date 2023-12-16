import { Link } from "react-router-dom";

// ICONS
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaTwitch,
  FaReddit,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  useEffect(() => {
    setError(false);
  }, [navigate]);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      toast.success(t("footer.success"));
      setEmail("");
      setError(false);
      return;
    }
    toast.error(t("footer.error"));
    setError(true);
    return;
  };

  return (
    <footer className="footer">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container">
        <div className="row">
          <div className="footerLinks">
            <div className="linkListContainer">
              <h6>{t("footer.productsHeader")}</h6>
              <ul className="footerLinkList">
                <li>
                  <Link to="/">{t("footer.products.tops")}</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.products.outwear")}</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.products.footwear")}</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.products.accessories")}</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.products.newArrivals")}</Link>
                </li>
              </ul>
            </div>
            <div className="linkListContainer">
              <h6>{t("footer.collectionsHeader")}</h6>
              <ul className="footerLinkList">
                <li>
                  <Link to="/">C9 x ONE PIECE</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.collections.proKit")}</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.collections.coreCollection")}</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.collections.blaber")}</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.collections.shopAll")}</Link>
                </li>
              </ul>
            </div>
            <div className="linkListContainer">
              <h6>{t("footer.aboutHeader")}</h6>
              <ul className="footerLinkList">
                <li>
                  <Link to="/">CLOUD9.GG</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.about.returns")}</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.about.FAQ")}</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.about.euStore")}</Link>
                </li>
                <li>
                  <Link to="/">{t("footer.about.londonSpitfire")}</Link>
                </li>
              </ul>
            </div>
            <div className="discount">
              <h6>{t("footer.discount.title")}</h6>
              <div className="formControl">
                <p>{t("footer.discount.info")}</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className={`${error ? "error" : ""}`}
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                      setError(false);
                    }}
                    placeholder={t("footer.discount.email")}
                  />
                  <button type="submit">
                    {t("footer.discount.subscribe")}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="footerInfo">
            <p>CLOUD9.GG</p>
            <p>©Eiichiro Oda/Shueisha, Toei Animation</p>
          </div>
          <div className="socialMediaLinks">
            <p>#C9Fam</p>
            <ul className="socialMediaLinksList">
              <li>
                <Link to="https://twitter.com/Cloud9">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/cloud9/">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/cloud9gg">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="https://discord.com/invite/cloud9">
                  <FaDiscord />
                </Link>
              </li>
              <li>
                <Link to="https://www.twitch.tv/team/cloud9">
                  <FaTwitch />
                </Link>
              </li>
              <li>
                <Link to="https://www.reddit.com/r/Cloud9/">
                  <FaReddit />
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/channel/UCEkorHXUNJ5tpcH0VE77_fA">
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/cloud9-esports/">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
