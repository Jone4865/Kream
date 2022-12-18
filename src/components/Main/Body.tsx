import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import BannerSlider from "../Slider/BannerSlider";
import { useQuery, gql } from "@apollo/client";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { GrLinkTop } from "react-icons/gr";
import { BsBookmark } from "react-icons/bs";
import StylepicksSlider from "../Slider/StylepicksSlider";
import TodaypeoplesSlider from "../Slider/TodaypeoplesSlider";

interface IId {
  id: number;
}

function Body() {
  const isPc = useMediaQuery({
    query: "(min-width: 770px) and (max-width: 3000px)",
  });

  const [cozyoneCount, setCozyoneCount] = useState(4);
  const [formyselfCount, setFormyselfCount] = useState(4);
  const [justdropCount, setJustdropCount] = useState(4);
  const [KBOCount, setKBOCount] = useState(4);
  const [mostpopularCount, setMostpopularCount] = useState(4);
  const [mostwishCount, setMostwishCount] = useState(4);
  const [newhighestCount, setNewhighestCount] = useState(4);
  const [newinCount, setNewinCount] = useState(4);
  const [newlowestCount, setNewlowestCount] = useState(4);
  const [streetmoodCount, setStreetmoodCount] = useState(4);
  const [uncomingCount, setUncomingCount] = useState(4);
  const [uniqueCount, setUniqueCount] = useState(4);
  const [wintercropCount, setWintercropCount] = useState(4);

  const GetData = gql`
    query getData {
      formyself {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
      cozyone {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      justdrop {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
      KBO {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
      mostpopular {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
      mostwish {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
      newhighest {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
      streetmood {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
      newin {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
      newlowest {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
      uncoming {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
      unique {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
      wintercrop {
        id
        price
        maker
        content
        delivery
        now
        imgName
      },
    }
  `;

  const { loading, error, data } = useQuery(GetData);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error :(</p>;

  return (
    <div className="Body">
      <div style={{ height: "100px" }} />
      <div className="Navigater" onClick={() => window.scrollTo(0, 0)}>
        <GrLinkTop style={{ fontSize: "17px", marginTop: "16px" }} />
      </div>
      <BannerSlider />
      <div
        className="BodyMenu"
        style={{ borderBottom: isPc ? "None" : "solid 1px #dcdcdc" }}
      >
        <div>
          <div className="MenuBodyinPc">
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img
                src={
                  isPc
                    ? "./img/Menu1_pc/Menu1.png"
                    : "./img/Menu1_NonPc/Menu1.jpg"
                }
              />
              <div>크림런</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img
                src={
                  isPc
                    ? "./img/Menu1_pc/Menu2.png"
                    : "./img/Menu1_NonPc/Menu2.jpg"
                }
              />
              <div>남성 추천</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img
                src={
                  isPc
                    ? "./img/Menu1_pc/Menu3.png"
                    : "./img/Menu1_NonPc/Menu3.jpg"
                }
              />
              <div>여성 추천</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img
                src={
                  isPc
                    ? "./img/Menu1_pc/Menu4.png"
                    : "./img/Menu1_NonPc/Menu4.jpg"
                }
              />
              <div>럭키드로우</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img
                src={
                  isPc
                    ? "./img/Menu1_pc/Menu5.png"
                    : "./img/Menu1_NonPc/Menu5.jpg"
                }
              />
              <div>이번주 브랜드관</div>
            </div>
          </div>
          <div className="MenuBodyinPc">
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img
                src={
                  isPc
                    ? "./img/Menu1_pc/Menu6.png"
                    : "./img/Menu1_NonPc/Menu6.jpg"
                }
              />
              <div>정가 아래</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img
                src={
                  isPc
                    ? "./img/Menu1_pc/Menu7.png"
                    : "./img/Menu1_NonPc/Menu7.jpg"
                }
              />
              <div>인기 럭셔리</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img
                src={
                  isPc
                    ? "./img/Menu1_pc/Menu8.png"
                    : "./img/Menu1_NonPc/Menu8.jpg"
                }
              />
              <div>크리스마스</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img
                src={
                  isPc
                    ? "./img/Menu1_pc/Menu9.png"
                    : "./img/Menu1_NonPc/Menu9.jpg"
                }
              />
              <div>태그하고 포인트!</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img
                src={
                  isPc
                    ? "./img/Menu1_pc/Menu10.png"
                    : "./img/Menu1_NonPc/Menu10.jpg"
                }
              />
              <div>수수료 할인</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Goods">
        <div className="DivName">Just Dropped</div>
        <div className="DivText">신규 등록 상품</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data?.justdrop?.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {justdropCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/justdrop/" +
                        data?.justdrop[id - 1]?.imgName +
                        ".png"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.justdrop[id - 1]?.maker}</div>
                      {data?.justdrop[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.justdrop[id - 1]?.content}
                    </div>
                    {data?.justdrop[id - 1]?.delivery ? (
                      data?.justdrop[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.justdrop[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.justdrop[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.justdrop?.length <= justdropCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setJustdropCount(justdropCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      {isPc !== true ? <div className="Line" /> : ""}
      <div className="BrandFocus">
        <div className="DivName">Brand Focus</div>
        <div className="DivText">추천 브랜드</div>
        <div>
          <div className="MenuBodyinPc">
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu1.png"} />
              <div>비비안 웨스트우드</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu2.png"} />
              <div>아크네</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu3.png"} />
              <div>에르메스</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu4.png"} />
              <div>샤넬</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu5.png"} />
              <div>롤렉스</div>
            </div>
          </div>
          <div className="MenuBodyinPc">
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu6.png"} />
              <div>구찌</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu7.png"} />
              <div>DU</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu8.png"} />
              <div>애플</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu9.png"} />
              <div>프라다</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu10.png"} />
              <div>아미</div>
            </div>
          </div>
          <div className="MenuBodyinPc">
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu11.png"} />
              <div>스톤 아일랜드</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu12.png"} />
              <div>메종 키츠네</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu13.png"} />
              <div>몽클레르</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu14.png"} />
              <div>루이비통</div>
            </div>
            <div className={isPc ? "MenuElementinPc" : "MenuElementinNonPc"}>
              <img src={"./img/Menu2/Menu15.png"} />
              <div>우영미</div>
            </div>
          </div>
        </div>
      </div>
      <img className="MidAD" src="./img/MidAd/MidAD1.jpg" />
      <div className="Goods">
        <div className="DivName">Most Popular</div>
        <div className="DivText">인기 상품</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data.mostpopular.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {mostpopularCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/mostpopular/" +
                        data?.mostpopular[id - 1]?.imgName +
                        ".png"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.mostpopular[id - 1]?.maker}</div>
                      {data?.mostpopular[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.mostpopular[id - 1]?.content}
                    </div>
                    {data?.mostpopular[id - 1]?.delivery ? (
                      data?.mostpopular[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.mostpopular[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.mostpopular[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.mostpopular?.length <= mostpopularCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setMostpopularCount(mostpopularCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      <div className="Peoples">
        <div className="DivName">Style Picks!</div>
        <StylepicksSlider/>
      </div>
      <img className="MidAD" src="./img/MidAd/MidAD2.jpg" />
      <div className="Goods">
        <div className="DivName">New In</div>
        <div className="DivText">발매 상품</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data.newin.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {newinCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/newin/" +
                        data?.newin[id - 1]?.imgName +
                        ".png"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.newin[id - 1]?.maker}</div>
                      {data?.newin[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.newin[id - 1]?.content}
                    </div>
                    {data?.newin[id - 1]?.delivery ? (
                      data?.newin[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.newin[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.newin[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.newin?.length <= newinCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setNewinCount(newinCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      <img className="MidAD" src="./img/MidAd/MidAD3.jpg" />
      <div className="Goods">
        <div className="DivName">Most Wish-Listed</div>
        <div className="DivText">위클리 탑 10 위시리스트</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data.mostwish.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {mostwishCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/mostwish/" +
                        data?.mostwish[id - 1]?.imgName +
                        ".png"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.mostwish[id - 1]?.maker}</div>
                      {data?.mostwish[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.mostwish[id - 1]?.content}
                    </div>
                    {data?.mostwish[id - 1]?.delivery ? (
                      data?.mostwish[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.mostwish[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.mostwish[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.mostwish?.length <= mostwishCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setMostwishCount(mostwishCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      <img className="MidAD" src="./img/MidAd/MidAD4.jpg" />
      <div className="Goods">
        <div className="DivName">KBO's 40th Anniversary</div>
        <div className="DivText">KBO의 40주년을 기념한 협업</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data.KBO.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {KBOCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/KBO/" +
                        data?.KBO[id - 1]?.imgName +
                        ".png"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.KBO[id - 1]?.maker}</div>
                      {data?.KBO[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.KBO[id - 1]?.content}
                    </div>
                    {data?.KBO[id - 1]?.delivery ? (
                      data?.KBO[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.KBO[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.KBO[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.KBO?.length <= KBOCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setKBOCount(KBOCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      <img className="MidAD" src="./img/MidAd/MidAD5.jpg" />
      <div className="Goods">
        <div className="DivName">Unique Signature Sign</div>
        <div className="DivText">유니크한 패턴과 로고</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data.unique.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {uniqueCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/unique/" +
                        data?.unique[id - 1]?.imgName +
                        ".jpg"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.unique[id - 1]?.maker}</div>
                      {data?.unique[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.unique[id - 1]?.content}
                    </div>
                    {data?.unique[id - 1]?.delivery ? (
                      data?.unique[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.unique[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.unique[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.unique?.length <= uniqueCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setUniqueCount(uniqueCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      <img className="MidAD" src="./img/MidAd/MidAD6.jpg" />
      <div className="Goods">
        <div className="DivName">Street Mood Heavy Outer</div>
        <div className="DivText">모두가 인정하는 스트릿 무드 대표!</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data.streetmood.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {streetmoodCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/streetmood/" +
                        data?.streetmood[id - 1]?.imgName +
                        ".png"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.streetmood[id - 1]?.maker}</div>
                      {data?.streetmood[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.streetmood[id - 1]?.content}
                    </div>
                    {data?.streetmood[id - 1]?.delivery ? (
                      data?.streetmood[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.streetmood[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.streetmood[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.streetmood?.length <= streetmoodCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setStreetmoodCount(streetmoodCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      <div className="Peoples">
        <div className="DivName">오늘의 인기유저</div>
        <TodaypeoplesSlider/>
      </div>
      <img className="MidAD" src="./img/MidAd/MidAD7.jpg" />
      <div className="Goods">
        <div className="DivName">New Lowest Asks</div>
        <div className="DivText">새로운 즉시 구매가</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data?.newlowest?.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {newlowestCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/newlowest/" +
                        data?.newlowest[id - 1]?.imgName +
                        ".png"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.newlowest[id - 1]?.maker}</div>
                      {data?.newlowest[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.newlowest[id - 1]?.content}
                    </div>
                    {data?.newlowest[id - 1]?.delivery ? (
                      data?.newlowest[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.newlowest[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.newlowest[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.newlowest?.length <= newlowestCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setNewlowestCount(newlowestCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      <div className="Goods">
        <div className="DivName">New Highest Bids</div>
        <div className="DivText">새로운 즉시 판매가</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data.newhighest.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {newhighestCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/newhighest/" +
                        data?.newhighest[id - 1]?.imgName +
                        ".png"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.newhighest[id - 1]?.maker}</div>
                      {data?.newhighest[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.newhighest[id - 1]?.content}
                    </div>
                    {data?.newhighest[id - 1]?.delivery ? (
                      data?.newhighest[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.newhighest[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.newhighest[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.newhighest?.length <= newhighestCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setNewhighestCount(newhighestCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      <img className="MidAD" src="./img/MidAd/MidAD8.jpg" />
      <div className="Goods">
        <div className="DivName">Upcoming Release</div>
        <div className="DivText">발매 예정</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data.uncoming.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {uncomingCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/uncoming/" +
                        data?.uncoming[id - 1]?.imgName +
                        ".png"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.uncoming[id - 1]?.maker}</div>
                      {data?.uncoming[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.uncoming[id - 1]?.content}
                    </div>
                    {data?.uncoming[id - 1]?.delivery ? (
                      data?.uncoming[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.uncoming[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.uncoming[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.uncoming?.length <= uncomingCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setUncomingCount(uncomingCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      <img className="MidAD" src="./img/MidAd/MidAD9.jpg" />
      <div className="Goods">
        <div className="DivName">Cozy One Mile Wear</div>
        <div className="DivText">편안하면서도 스타일리시하게</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data.cozyone.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {cozyoneCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/cozyone/" +
                        data?.cozyone[id - 1]?.imgName +
                        ".png"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.cozyone[id - 1]?.maker}</div>
                      {data?.cozyone[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.cozyone[id - 1]?.content}
                    </div>
                    {data?.cozyone[id - 1]?.delivery ? (
                      data?.cozyone[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.cozyone[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.cozyone[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.cozyone?.length <= cozyoneCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setCozyoneCount(cozyoneCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      <img className="MidAD" src="./img/MidAd/MidAD10.jpg" />
      <div className="Goods">
        <div className="DivName">For Myself</div>
        <div className="DivText">올 한해 고생한 나에게</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data.formyself.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {formyselfCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/formyself/" +
                        data?.formyself[id - 1]?.imgName +
                        ".png"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.formyself[id - 1]?.maker}</div>
                      {data?.formyself[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.formyself[id - 1]?.content}
                    </div>
                    {data?.formyself[id - 1]?.delivery ? (
                      data?.formyself[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.formyself[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.formyself[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.formyself?.length <= formyselfCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setFormyselfCount(formyselfCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
      <img className="MidAD" src="./img/MidAd/MidAD11.jpg" />
      <div className="Goods">
        <div className="DivName">Winter Crop Style</div>
        <div className="DivText">센스있는 겨울 크롭 스타일링</div>
        <div
          className="GoodsElement"
          style={{ flexWrap: isPc ? "wrap" : "nowrap", overflowX: "scroll" }}
        >
          {data.wintercrop.map(({ id }: IId) => {
            return (
              <div
                className="GoodsBody"
                key={id}
                style={{ margin: isPc ? "" : "0 8px" }}
              >
                {wintercropCount >= id ? (
                  <div>
                    {/* <BsBookmark /> */}
                    <img
                      src={
                        "./img/Goods/wintercrop/" +
                        data?.wintercrop[id - 1]?.imgName +
                        ".jpg"
                      }
                    />
                    <div className="GoodsMaker">
                      <div>{data?.wintercrop[id - 1]?.maker}</div>
                      {data?.wintercrop[id - 1]?.delivery === "brand" ? (
                        <AiFillCheckCircle
                          style={{
                            color: "rgb(144, 138, 233)",
                            fontSize: "15px",
                            marginLeft: "2px",
                            marginTop: "3px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="GoodsContent">
                      {data?.wintercrop[id - 1]?.content}
                    </div>
                    {data?.wintercrop[id - 1]?.delivery ? (
                      data?.wintercrop[id - 1]?.delivery === "brand" ? (
                        <div className="Brand">브랜드배송</div>
                      ) : (
                        <div className="Speed">
                          <AiFillThunderbolt
                            style={{ color: "rgb(31, 201, 90)" }}
                          />
                          빠른배송
                        </div>
                      )
                    ) : (
                      ""
                    )}
                    <div className="GoodsPrice">
                      {data?.wintercrop[id - 1]?.price?.toLocaleString()}원
                    </div>
                    {data?.wintercrop[id - 1]?.now ? (
                      <div className="Now">즉시 구매가</div>
                    ) : (
                      <div className="Now">구매가</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {data?.wintercrop?.length <= wintercropCount ? (
          ""
        ) : (
          <button
            className="moreButton"
            onClick={() => {
              setWintercropCount(wintercropCount + 4);
            }}
          >
            더보기
          </button>
        )}
      </div>
    </div>
  );
}

export default Body;