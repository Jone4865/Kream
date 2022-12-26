import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import useInterval from "../../../hooks/useInterval/useInterval";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl"; // 탑으로 가는 아이콘

type IProps = {
  data: any;
  isPc: boolean;
};

type IData = {
  id: number;
  imgName: string;
  bottomColor: string;
  backColor: String;
};

function Carousel({data, isPc} : IProps) {

  const [page, setPage] = useState<number>(0);
  const [paging, setPaging] = useState<boolean>(true);
  const [time, setTime] = useState<number>(5000);

  useInterval(() => {
    if (paging) {
      setPage((prev) => (page === data?.length - 1 ? 0 : prev + 1));
    } else {
      setPaging(true);
    }
  }, time);

  return (
    <div
      className={isPc ? "pcBanner" : "nonPcBanner"}
      style={{ backgroundColor: `#${data[page]?.backColor}` }}
    >
      {isPc ? (
        <div className="btns">
          <div
            className="btnLeft"
            style={{ color: data[page]?.bottomColor }}
            onClick={() => {
              setPaging(false);
              setTime(5000);
              setPage((prev) =>
                page === 0 ? data?.length - 1 : prev - 1
              );
            }}
          >
            <SlArrowLeft />
          </div>
          <div
            className="btnRight"
            style={{ color: data[page]?.bottomColor }}
            onClick={() => {
              setPaging(false);
              setTime(5000);
              setPage((prev) =>
                page === data?.length - 1 ? 0 : prev + 1
              );
            }}
          >
            <SlArrowRight />
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className="bannerBody"
        style={{ backgroundColor: `${data[page - 1]?.backColor}` }}
      >
        {data?.map(({ id, imgName }: IData) => (
          <img
            key={id}
            className={page === id - 1 ? "img" : "nonImg"}
            style={{ top: !isPc ? "35%" : "" }}
            src={`./img/banner/${imgName}.jpg`}
            alt="bannerImage"
          />
        ))}
      </div>
      <div className="dots">
        {data?.map(({ id, bottomColor }: IData) => (
          <div
            key={id}
            className={isPc ? "pcDot" : "nonPcDot"}
            style={{
              backgroundColor:
                id == page + 1 ? `${bottomColor}` : "rgba(211, 211, 211, 0.4)",
            }}
            onClick={() => {
              setPaging(false);
              setTime(5000);
              setPage(+id - 1);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
