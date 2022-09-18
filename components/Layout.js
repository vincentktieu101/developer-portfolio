import React from "react";
// TODO: add ModalContext
// import { createContext } from "react";

import Header from "./Header";
import Footer from "./Footer";

// const ModalContext = createContext();

function Layout(props) {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
// export { ModalContext };
