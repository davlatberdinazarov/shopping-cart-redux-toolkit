import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notifications from "./components/Notifications";
import { fetchData, sendCartData } from "./store/cart-actions";
let isFirstRender = true;

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  },[dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
  },[cart, dispatch])
  return (
    <div className="App">
      { notification && <Notifications type={ notification.type } message={ notification.message } />}
      { isLoggedIn ? <Layout/> : <Auth/> }
    </div>
  );
}

export default App;