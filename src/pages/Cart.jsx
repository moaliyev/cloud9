import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  resetCart,
} from "../redux/slices/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { cart } = useSelector(state => state.cart);
  const { userIn } = useSelector(state => state.user);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(
    cart.reduce((total, product) => {
      return total + Number(product.price) * product.productCount;
    }, 0)
  );

  useEffect(() => {
    setTotalPrice(
      cart.reduce((total, product) => {
        return total + Number(product.price) * product.productCount;
      }, 0)
    );
  }, [cart]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!userIn) {
      toast.error("You have to be signed in!");
      return;
    }
    toast.success("Your payment was successfull.");
    dispatch(resetCart());
  };

  return (
    <section className="cartSection">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container">
        <div className="row">
          <h2 className="title">{t("cart.title")}</h2>
          {cart.length ? (
            <form className="checkoutForm" onSubmit={handleSubmit}>
              <table>
                <thead>
                  <tr>
                    <th>{t("cart.product")}</th>
                    <th></th>
                    <th>{t("cart.quantity")}</th>
                    <th>{t("cart.total")}</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="imageContainer">
                          <img
                            src={`${process.env.REACT_APP_IMAGES}/${item.productImage}`}
                            alt={item.name}
                          />
                        </div>
                      </td>
                      <td>
                        <Link>{item.name}</Link>
                        {item.customName ? <p>{t("cart.customName")}</p> : ""}
                        <p>{item.size}</p>
                        <p>$ {item.price}</p>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <div className="quantity">
                          <span
                            className="decrement"
                            onClick={() => dispatch(removeFromCart(item))}>
                            <FaMinus />
                          </span>
                          <input
                            type="number"
                            readOnly
                            name="quantity"
                            value={item.productCount}
                            id="quantity"
                          />
                          <span
                            className="increment"
                            onClick={() => dispatch(addToCart(item))}>
                            <FaPlus />
                          </span>
                        </div>
                      </td>
                      <td className="price">
                        $ {item.price * item.productCount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button>{t("cart.checkout")}</button>
              <span className="totalPrice">
                {t("cart.total")}: $ {totalPrice}
              </span>
            </form>
          ) : (
            <div className="emptyCart">
              <h6 className="title">{t("cart.info")}</h6>
              <Link to="/all-products">{t("cart.button")}</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
