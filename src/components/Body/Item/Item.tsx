import "./Item.scss";
import React, { useState } from "react";
import usePc from "../../../hooks/usePc/usePc";

import { AiFillThunderbolt } from "react-icons/ai"; // 아이콘들
import { AiFillCheckCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

type Iprops = {
  item: any;
  name: string;
  divName: string;
  divText: string;
};

type IId = {
  id: number;
  price: number;
  maker: string;
  content: string;
  delivery: string;
  now: boolean;
  imgName: string;
};

function Item({ item, name, divName, divText }: Iprops) {
  let isPc = false;

  if (usePc()) {
    isPc = true
  } else {
    isPc = false
  }

  const [items, setItems] = useState<number>(4);

  return (
    <div className="goods">
      <div className="divName">{divName}</div>
      <div className="divText">{divText}</div>
      <div className={isPc ? "pcGoodsElement" : "nonPcGoodsElement"}>
        {item?.map(
          ({ id, price, maker, content, delivery, now, imgName }: IId) => {
            return id <= items ? (
              <div className={isPc ? "pcGoodsBody" : "nonPcGoodsBody"} key={id}>
                <div className={isPc ? "pcGoodsImg" : "nonPcGoodsImg"}>
                  <img
                    src={`./img/goods/${name}/${imgName}.png`}
                    alt="itemImage"
                  />
                  <BsBookmark
                    style={{
                      position: "absolute",
                      right: "8%",
                      bottom: "5%",
                      fontSize: "18px",
                    }}
                  />
                </div>
                <div className={!isPc ? "nonPcGoodsBottom" : ""}>
                  <div className="goodsMaker">
                    <div>{maker}</div>
                    <div>
                      {delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="goodsContent">{content}</div>
                  <div>
                    {delivery === "speed" ? (
                      <div className="speed">
                        <AiFillThunderbolt
                          style={{ color: "rgb(31, 201, 90)" }}
                        />
                        빠른배송
                      </div>
                    ) : delivery === "brand" ? (
                      <div className="brand">브랜드배송</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="goodsPrice">{price.toLocaleString()}원</div>
                  <div className="now">{now ? "즉시 구매가" : "구매가"}</div>
                </div>
              </div>
            ) : (
              ""
            );
          }
        )}
      </div>
      {item?.length <= items ? (
        ""
      ) : isPc ? (
        <button
          className="moreButton"
          onClick={() => {
            setItems((prev) => prev + 4);
          }}
        >
          더보기
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Item;
