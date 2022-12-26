import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"; // pc여부 확인 모듈

const usePc = () => {
  const isPc = useMediaQuery({
    query: "(min-width: 770px) and (max-width: 1920px)",
  });
  
  const [pc, setPc] = useState(isPc);

  useEffect(() => {
    if (isPc) {
      setPc(true);
    } else {
      setPc(false);
    }
  }, [isPc]);

  return pc ? true : false;
};

export default usePc;
