import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <h2 className="title">CART</h2>
          {cart.length ? (
            <form className="checkoutForm">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th></th>
                    <th>Quantity</th>
                    <th>Total</th>
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
                        {item.customName ? <p>Custom name included</p> : ""}
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
            </form>
          ) : (
            <div className="emptyCart">
              <h6 className="title">Your cart is empty</h6>
              <Link to="/">SHOP OUR PRODUCTS</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
