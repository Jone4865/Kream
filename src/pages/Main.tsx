import React from 'react';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import usePc from "../hooks/usePc/usePc";

function Main() {

  let isPc = false;

  if (usePc()) {
    isPc = true
  } else {
    isPc = false
  }
  return (
    <div>
      <Header isPc={isPc} />
      <Body/>
      <Footer isPc={isPc}/>
    </div>
  );
}

export default Main;
