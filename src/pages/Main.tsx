import React, { useEffect, useState } from "react";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Side from "../components/Side/Side";
import usePc from "../hooks/usePc/usePc";

function Main() {
  const [modal, setModal] = useState(false);

  const modalSet = (modal: boolean) => {
    setModal(modal);
  };

  let isPc = false;

  if (usePc()) {
    isPc = true;
  } else {
    isPc = false;
  }

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal]);

  return (
    <div className="main">
      <Header isPc={isPc} modal={modal} modalSet={modalSet} />
      <Side modal={modal} modalSet={modalSet} />
      <Body isPc={isPc} />
      <Footer isPc={isPc} />
    </div>
  );
}

export default Main;
