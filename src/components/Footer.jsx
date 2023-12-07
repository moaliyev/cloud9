import { Link } from "react-router-dom";

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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footerLinks">
            <div className="linkListContainer">
              <h6>Products</h6>
              <ul className="footerLinkList">
                <li>
                  <Link>Tops</Link>
                </li>
                <li>
                  <Link>Outwear</Link>
                </li>
                <li>
                  <Link>Footwear</Link>
                </li>
                <li>
                  <Link>Accessories</Link>
                </li>
                <li>
                  <Link>New Arrivals</Link>
                </li>
              </ul>
            </div>
            <div className="linkListContainer">
              <h6>Collections</h6>
              <ul className="footerLinkList">
                <li>
                  <Link>C9 x ONE PIECE</Link>
                </li>
                <li>
                  <Link>2023 Pro kit</Link>
                </li>
                <li>
                  <Link>Cloud9 Core Collection</Link>
                </li>
                <li>
                  <Link>Blaber Capsule</Link>
                </li>
                <li>
                  <Link>Shop All</Link>
                </li>
              </ul>
            </div>
            <div className="linkListContainer">
              <h6>About</h6>
              <ul className="footerLinkList">
                <li>
                  <Link>CLOUD9.GG</Link>
                </li>
                <li>
                  <Link>Returns</Link>
                </li>
                <li>
                  <Link>FAQ</Link>
                </li>
                <li>
                  <Link>Cloud9 EU Store</Link>
                </li>
                <li>
                  <Link>London Spitfire Store</Link>
                </li>
              </ul>
            </div>
            <div className="discount">
              <h6>10% Discount - Join the C9fam</h6>
              <div className="formControl">
                <p>
                  Exclusive deals, new product drops and 10% off your next
                  order.
                </p>
                <form>
                  <input type="email" placeholder="Enter your email address" />
                  <button type="submit">SUBSCRIBE</button>
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
                <Link>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link>
                  <FaDiscord />
                </Link>
              </li>
              <li>
                <Link>
                  <FaTwitch />
                </Link>
              </li>
              <li>
                <Link>
                  <FaReddit />
                </Link>
              </li>
              <li>
                <Link>
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link>
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
