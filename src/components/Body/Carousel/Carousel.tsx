import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import useInterval from "../../../hooks/useInterval/useInterval";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl"; // 탑으로 가는 아이콘

type Props = {
  data: Data[];
  isPc: boolean;
};

type Data = {
  id: number;
  imgName: string;
  bottomColor: string;
  backColor: String;
};

function Carousel({data, isPc} : Props) {

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
      className={"banner"}
      style={{ backgroundColor: `#${data[page]?.backColor}` }}
    >
      {isPc ? (
        <div className="btns">
          <div
            className="btn-left"
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
            className="btn-right"
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
        className="banner-body"
        style={{ backgroundColor: `${data[page - 1]?.backColor}` }}
      >
        {data?.map(({ id, imgName }: Data) => (
          <img
            key={id}
            className={page === id - 1 ? "img" : "non-img"}
            src={`./img/banner/${imgName}`}
            alt="배너이미지"
          />
        ))}
      </div>
      <div className="dots">
        {data?.map(({ id, bottomColor }: Data) => (
          <div
            key={id}
            className={"dot"}
            style={{
              backgroundColor:
                id == page + 1 ? `${bottomColor}` : "rgba(211, 211, 211, 0.4)",
            }}
            onClick={() => {
              setPaging(false);
              setTime(5000);
              setPage(+id - 1);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
