import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
const Layout = () => {
  let total = 0;

  const cartItems = useSelector(state => state.cart.itemsList)
  if (cartItems) {
    cartItems.forEach(item => (total += item.price * item.quantity));
  }

  const dispatch = useDispatch()
  const showCart = dispatch(() => cartActions.setShowCart())

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
       { showCart && <CartItems/>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;