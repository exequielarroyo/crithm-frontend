import React from "react";
import { Outlet } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Layout = () => {
  document.title = "Crithm | payment";

  return (
    <>
    {console.log(process.env.REACT_APP_PAYPAL_CLIENT_ID)}
      <PayPalScriptProvider options={{ "client-id": `${process.env.REACT_APP_PAYPAL_CLIENT_ID}` }}>
        <Outlet />
      </PayPalScriptProvider>
    </>
  );
};

export default Layout;
