import React, { useState } from "react";
import usePc from "../../hooks/usePc/usePc";
import "./Banner.css";
import useInterval from "../../hooks/useInterval/useInterval";

type IProps = {
  data: any;
};

type IData = {
  id: number;
  imgName: string;
  bottomColor: string;
  backColor: string;
};

function Banner(data: IProps) {
  const [isPc] = useState(usePc());
  const [page, setPage] = useState<number>(0);
  
  return (
    <div
      className={isPc ? "pcBanner" : "nonPcBanner"}
      style={{ backgroundColor: `#${data.data[page]?.backColor}` }}
    >
      {isPc ? (
        <div className="btns">
          <div
            className="btnLeft"
            style={{ color: data.data[page]?.bottomColor }}
            onClick={() => {
              setPage((prev) =>
                page === 0 ? data.data?.length - 1 : prev - 1
              );
            }}
          >
            &lt;
          </div>
          <div
            className="btnRight"
            style={{ color: data.data[page]?.bottomColor }}
            onClick={() => {
              setPage((prev) =>
                page === data.data?.length - 1 ? 0 : prev + 1
              );
            }}
          >
            &gt;
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className="bannerBody"
        style={{ backgroundColor: `${data.data[page - 1]?.backColor}` }}
      >
        {data.data?.map(({ id, imgName }: IData) => (
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
        {data.data?.map(({ id, bottomColor }: IData) => (
          <div
            key={id}
            className={isPc ? "pcDot" : "nonPcDot"}
            style={{
              backgroundColor:
                id == page + 1 ? `${bottomColor}` : "rgba(211, 211, 211, 0.4)",
            }}
            onClick={() => setPage(+id - 1)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
