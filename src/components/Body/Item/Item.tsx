import "./Item.scss";
import React, { useState } from "react";

import { AiFillThunderbolt } from "react-icons/ai"; // 아이콘들
import { AiFillCheckCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import Title from "../Title/Title";

type Props = {
  items: Data[];
  name: string;
  isPc: boolean;
  title: string;
  subTitle: string;
};

type Data = {
  id: number;
  price: number;
  maker: string;
  content: string;
  delivery: string;
  now: boolean;
  imgName: string;
};

function Item({ items, name, isPc, title, subTitle }: Props) {
  const [totalCount, setItems] = useState<number>(4);

  return (
    <>
      <Title title={title} subTitle={subTitle} />
      <div className="goods">
        <div className="goods-element">
          {items?.map((item, idx) => {
            return idx + 1 <= totalCount ? (
              <div className="goods-body" key={item?.id}>
                <div className="goods-img">
                  <img
                    src={`./img/goods/${name}/${item?.imgName}`}
                    alt="아이템이미지"
                  />
                  <BsBookmark className="icon-bookmark" />
                </div>
                <div className="goods-bottom">
                  <div className="goods-maker">
                    <div>{item?.maker}</div>
                    <div>
                      {item?.delivery === "brand" ? (
                        <AiFillCheckCircle className="icon-circle" />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="goods-content">{item?.content}</div>
                  <div>
                    {item?.delivery === "speed" ? (
                      <div className="speed">
                        <AiFillThunderbolt className="icon-delevery" />
                        빠른배송
                      </div>
                    ) : item?.delivery === "brand" ? (
                      <div className="brand">브랜드배송</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="goods-price">
                    {item?.price.toLocaleString()}원
                  </div>
                  <div className="now">
                    {item?.now ? "즉시 구매가" : "구매가"}
                  </div>
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
        {items?.length <= totalCount ? (
          ""
        ) : isPc ? (
          <button
            className="more-button"
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
    </>
  );
}

export default Item;
