import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Сontacts from "../Сontacts/Сontacts";
import Login from "../Login/Login";
import Registr from "../Registr/Registr";
import Carts from "../Carts/Carts";
import CartFavorite from "../CartFavorite/CartFavorite";
import Search from "../Search/Search";
import OrderCheckout from "../OrderCheckout/OrderCheckout";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const isCheckoutPage = location.pathname === "/checkout";

  const [modals, setModals] = useState({
    login: false,
    contacts: false,
    registr: false,
    carts: false,
    search: false,
    cartFavorite: false,
  });

  const handleOpen = (modalName) => {
    setModals({
      login: false,
      contacts: false,
      registr: false,
      carts: false,
      cartFavorite: false,
      search: false,

      [modalName]: true,
    });
  };

  const handleClose = (modalName) => {
    setModals((prev) => ({ ...prev, [modalName]: false }));
  };

  return (
    <div className="app">
      {modals.contacts ? <Сontacts handleClose={handleClose} /> : ""}
      {modals.login ? (
        <Login
          modals={modals}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      ) : (
        ""
      )}
      {modals.registr ? (
        <Registr
          modals={modals}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      ) : (
        ""
      )}
      {modals.carts ? (
        <Carts
          setModals={setModals}
          modals={modals}
          handleOpen={handleOpen}
          handleClose={handleClose}
          isCheckoutPage={isCheckoutPage}
        />
      ) : (
        ""
      )}
      {modals.search ? (
        <Search
          modals={modals}
          handleClose={handleClose}
          isCheckoutPage={isCheckoutPage}
        />
      ) : (
        ""
      )}

      {modals.cartFavorite ? <CartFavorite handleClose={handleClose} /> : ""}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header handleOpen={handleOpen} modals={modals} />
              <Main />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header
                handleOpen={handleOpen}
                modals={modals}
                isCheckoutPage={isCheckoutPage}
              />
              <OrderCheckout
                handleClose={handleClose}
                isCheckoutPage={isCheckoutPage}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
